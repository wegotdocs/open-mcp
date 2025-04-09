import { z } from "zod";
export const inputParams = {
    "api_key_uuid": z.string().describe("API key ID"),
    "api_key": z.string().describe("Anthropic API key").optional(),
    "b_api_key_uuid": z.string().describe("API key ID").optional(),
    "name": z.string().describe("Name of the key").optional()
};
