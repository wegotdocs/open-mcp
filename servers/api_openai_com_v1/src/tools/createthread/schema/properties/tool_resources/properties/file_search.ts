import { z } from "zod"

export const inputParamsSchema = {
  "vector_store_ids": z.array(z.string()).max(1).describe("The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.\n").optional(),
  "vector_stores": z.array(z.object({ "file_ids": z.array(z.string()).max(10000).describe("A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.\n").optional(), "chunking_strategy": z.record(z.any()).and(z.object({ "type": z.literal("auto").describe("Always `auto`.") }).strict().describe("The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.")).describe("The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() })).max(1).describe("A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.\n").optional()
}