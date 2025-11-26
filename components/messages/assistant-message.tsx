import { UIMessage, ToolCallPart, ToolResultPart } from "ai";
import { Response } from "@/components/ai-elements/response";
import { ReasoningPart } from "./reasoning-part";
import { ToolCall, ToolResult } from "./tool-call";
import { GreenBadge } from "@/components/ui/green-badge";

const GREEN_BADGE_REGEX = /\[RENDER_GREEN_BADGE:\s*SAVED_KG=(\d+\.?\d*)\]/g;

function parseGreenBadge(text: string): { cleanedText: string; savedKg: number | null } {
    const match = GREEN_BADGE_REGEX.exec(text);
    GREEN_BADGE_REGEX.lastIndex = 0;
    
    if (match) {
        const savedKg = parseFloat(match[1]);
        const cleanedText = text.replace(GREEN_BADGE_REGEX, '').trim();
        return { cleanedText, savedKg };
    }
    
    return { cleanedText: text, savedKg: null };
}

export function AssistantMessage({ message, status, isLastMessage, durations, onDurationChange }: { message: UIMessage; status?: string; isLastMessage?: boolean; durations?: Record<string, number>; onDurationChange?: (key: string, duration: number) => void }) {
    return (
        <div className="w-full">
            <div className="text-sm flex flex-col gap-4">
                {message.parts.map((part, i) => {
                    const isStreaming = status === "streaming" && isLastMessage && i === message.parts.length - 1;
                    const durationKey = `${message.id}-${i}`;
                    const duration = durations?.[durationKey];

                    if (part.type === "text") {
                        const { cleanedText, savedKg } = parseGreenBadge(part.text);
                        return (
                            <div key={`${message.id}-${i}`}>
                                <Response>{cleanedText}</Response>
                                {savedKg !== null && <GreenBadge savedKg={savedKg} />}
                            </div>
                        );
                    } else if (part.type === "reasoning") {
                        return (
                            <ReasoningPart
                                key={`${message.id}-${i}`}
                                part={part}
                                isStreaming={isStreaming}
                                duration={duration}
                                onDurationChange={onDurationChange ? (d) => onDurationChange(durationKey, d) : undefined}
                            />
                        );
                    } else if (
                        part.type.startsWith("tool-") || part.type === "dynamic-tool"
                    ) {
                        if ('state' in part && part.state === "output-available") {
                            return (
                                <ToolResult
                                    key={`${message.id}-${i}`}
                                    part={part as unknown as ToolResultPart}
                                />
                            );
                        } else {
                            return (
                                <ToolCall
                                    key={`${message.id}-${i}`}
                                    part={part as unknown as ToolCallPart}
                                />
                            );
                        }
                    }
                    return null;
                })}
            </div>
        </div>
    )
}