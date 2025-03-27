import { z } from "zod";
export const toolName = `delete_categories_id_json`;
export const toolDescription = `Delete an existing Category.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/categories/{id}.json`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Category") }).optional() }).shape;
