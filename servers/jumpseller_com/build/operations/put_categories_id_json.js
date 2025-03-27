import { z } from "zod";
export const toolName = `put_categories_id_json`;
export const toolDescription = `Modify an existing Category.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/categories/{id}.json`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Category") }).optional(), "body": z.object({ "category": z.object({ "name": z.string().describe("Name of the Category").optional(), "parent_id": z.number().int().describe("Unique identifier of the Parent Category").optional() }).optional() }).optional() }).shape;
