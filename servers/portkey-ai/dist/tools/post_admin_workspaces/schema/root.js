import { z } from "zod";
export const inputParams = {
    "name": z.string().optional(),
    "description": z.string().optional(),
    "defaults": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `defaults` to the tool, first call the tool `expandSchema` with \"/properties/defaults\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "users": z.array(z.string()).optional()
};
