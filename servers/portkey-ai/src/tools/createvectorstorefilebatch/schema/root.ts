import { z } from "zod"

export const inputParams = {
  "vector_store_id": z.string().describe("The ID of the vector store for which to create a File Batch.\n"),
  "file_ids": z.array(z.string()).min(1).max(500).describe("A list of [File](https://platform.openai.com/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files."),
  "chunking_strategy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `chunking_strategy` to the tool, first call the tool `expandSchema` with \"/properties/chunking_strategy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.</property-description>").optional()
}