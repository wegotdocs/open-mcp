import { z } from "zod";
export const toolName = `post_categories_json`;
export const toolDescription = `Create a new Category.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/categories.json`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "category": z.object({ "name": z.string().describe("Name of the Category").optional(), "parent_id": z.number().int().describe("Unique identifier of the Parent Category").optional() }).optional() }).optional() }).shape;
