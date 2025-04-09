import { z } from "zod";
export const inputParams = {
    "api_key": z.string().describe("OpenAI API key").optional(),
    "name": z.string().describe("Name of the key").optional()
};
