import { z } from "zod";
export const toolName = `post_contentpro_similar_text`;
export const toolDescription = `The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.`;
export const baseUrl = `https://api.byautomata.io`;
export const path = `/contentpro-similar-text`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "text": z.string().describe("Any piece of text") }).optional() }).shape;
