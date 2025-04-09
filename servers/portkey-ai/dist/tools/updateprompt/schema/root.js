import { z } from "zod";
export const inputParams = {
    "promptId": z.string(),
    "name": z.string().optional(),
    "collection_id": z.string().optional(),
    "string": z.string().optional(),
    "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "model": z.string().optional(),
    "virtual_key": z.string().optional(),
    "version_description": z.string().optional(),
    "functions": z.array(z.record(z.any())).optional(),
    "tools": z.array(z.record(z.any())).optional(),
    "tool_choice": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tool_choice` to the tool, first call the tool `expandSchema` with \"/properties/tool_choice\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "is_raw_template": z.union([z.literal(0), z.literal(1)]).optional(),
    "prompt_metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `prompt_metadata` to the tool, first call the tool `expandSchema` with \"/properties/prompt_metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
};
