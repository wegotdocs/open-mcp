import { z } from "zod";
export const inputParams = {
    "id": z.number().int().optional(),
    "name": z.string(),
    "category": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `category` to the tool, first call the tool `expandSchema` with \"/properties/category\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "photoUrls": z.array(z.string()),
    "tags": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().optional() })).optional(),
    "status": z.enum(["available", "pending", "sold"]).describe("pet status in the store").optional()
};
