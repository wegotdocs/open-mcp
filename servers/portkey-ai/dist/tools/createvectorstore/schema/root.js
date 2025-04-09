import { z } from "zod";
export const inputParams = {
    "file_ids": z.array(z.string()).max(500).describe("A list of [File](https://platform.openai.com/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files.").optional(),
    "name": z.string().describe("The name of the vector store.").optional(),
    "expires_after": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `expires_after` to the tool, first call the tool `expandSchema` with \"/properties/expires_after\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The expiration policy for a vector store.</property-description>").optional(),
    "chunking_strategy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `chunking_strategy` to the tool, first call the tool `expandSchema` with \"/properties/chunking_strategy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty.</property-description>").optional(),
    "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n</property-description>").optional()
};
