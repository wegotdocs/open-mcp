import { z } from "zod";
export const inputParams = {
    "type": z.enum(["enabled", "disabled"]).describe("Enables or disables the thinking mode capability."),
    "budget_tokens": z.number().int().gte(1).describe("The maximum number of tokens to allocate for the thinking process.\nA higher token budget allows for more thorough reasoning but may increase overall response time.\n").optional()
};
