import { z } from "zod";
export const inputParams = {
    "enable_web_search": z.enum(["auto", "on", "off"]).describe("Enable web search for this request. Defaults to off. On will force web search on the request. Auto will enable it based on the model's discretion. Citations will be returned either in the first chunk of a streaming result, or in the non streaming response.").optional(),
    "include_venice_system_prompt": z.boolean().describe("Whether to include the Venice supplied system prompts along side specified system prompts.").optional(),
    "character_slug": z.string().describe("The character slug of a public Venice character.").optional()
};
