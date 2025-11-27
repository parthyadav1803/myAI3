import { streamText, UIMessage, convertToModelMessages, stepCountIs, createUIMessageStream, createUIMessageStreamResponse } from 'ai';
import { MODEL } from '@/config';
import { SYSTEM_PROMPT } from '@/prompts';
import { isContentFlagged } from '@/lib/moderation';
import { webSearch } from './tools/web-search';
import { vectorDatabaseSearch } from './tools/search-vector-database';

export const maxDuration = 60;

const MAX_MESSAGES = 30;

function trimMessageHistory(messages: UIMessage[]): UIMessage[] {
    if (messages.length <= MAX_MESSAGES) {
        return messages;
    }
    
    const systemMessages = messages.filter(m => m.role === 'system');
    const otherMessages = messages.filter(m => m.role !== 'system');
    
    const recentMessages = otherMessages.slice(-MAX_MESSAGES);
    
    return [...systemMessages, ...recentMessages];
}

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();
        
        const trimmedMessages = trimMessageHistory(messages);

        const latestUserMessage = trimmedMessages
            .filter(msg => msg.role === 'user')
            .pop();

        if (latestUserMessage) {
            const textParts = latestUserMessage.parts
                .filter(part => part.type === 'text')
                .map(part => 'text' in part ? part.text : '')
                .join('');

            if (textParts) {
                const moderationResult = await isContentFlagged(textParts);

                if (moderationResult.flagged) {
                    const stream = createUIMessageStream({
                        execute({ writer }) {
                            const textId = 'moderation-denial-text';

                            writer.write({
                                type: 'start',
                            });

                            writer.write({
                                type: 'text-start',
                                id: textId,
                            });

                            writer.write({
                                type: 'text-delta',
                                id: textId,
                                delta: moderationResult.denialMessage || "Your message violates our guidelines. I can't answer that.",
                            });

                            writer.write({
                                type: 'text-end',
                                id: textId,
                            });

                            writer.write({
                                type: 'finish',
                            });
                        },
                    });

                    return createUIMessageStreamResponse({ stream });
                }
            }
        }

        const result = streamText({
            model: MODEL,
            system: SYSTEM_PROMPT,
            messages: convertToModelMessages(trimmedMessages),
            tools: {
                webSearch,
                vectorDatabaseSearch,
            },
            stopWhen: stepCountIs(10),
            providerOptions: {
                openai: {
                    reasoningSummary: 'auto',
                    reasoningEffort: 'low',
                    parallelToolCalls: false,
                }
            }
        });

        return result.toUIMessageStreamResponse({
            sendReasoning: true,
        });
    } catch (error) {
        console.error('Chat API error:', error);
        
        const stream = createUIMessageStream({
            execute({ writer }) {
                const textId = 'error-text';

                writer.write({
                    type: 'start',
                });

                writer.write({
                    type: 'text-start',
                    id: textId,
                });

                writer.write({
                    type: 'text-delta',
                    id: textId,
                    delta: "I'm having trouble processing your request right now. Please try again or start a new chat.",
                });

                writer.write({
                    type: 'text-end',
                    id: textId,
                });

                writer.write({
                    type: 'finish',
                });
            },
        });

        return createUIMessageStreamResponse({ stream });
    }
}
