import { Pinecone } from '@pinecone-database/pinecone';
import { PINECONE_TOP_K } from '@/config';
import { searchResultsToChunks, getSourcesFromChunks, getContextFromSources } from '@/lib/sources';
import { PINECONE_INDEX_NAME } from '@/config';

let pinecone: Pinecone | null = null;
let pineconeIndex: ReturnType<Pinecone['Index']> | null = null;

if (process.env.PINECONE_API_KEY) {
    pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY,
    });
    pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);
}

export { pinecone, pineconeIndex };

export async function searchPinecone(
    query: string,
): Promise<string> {
    if (!pineconeIndex) {
        console.log('Pinecone is not configured. Skipping vector database search.');
        return '< results > No vector database configured </results>';
    }

    try {
        const results = await pineconeIndex.namespace('default').searchRecords({
            query: {
                inputs: {
                    text: query,
                },
                topK: PINECONE_TOP_K,
            },
            fields: ['text', 'pre_context', 'post_context', 'source_url', 'source_description', 'source_type', 'order'],
        });

        const chunks = searchResultsToChunks(results);
        const sources = getSourcesFromChunks(chunks);
        const context = getContextFromSources(sources);
        return `< results > ${context} </results>`;
    } catch (error) {
        console.error('Error searching Pinecone:', error);
        return '< results > Error searching vector database </results>';
    }
}