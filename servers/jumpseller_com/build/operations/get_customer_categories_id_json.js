import { z } from "zod";
export const toolName = `get_customer_categories_id_json`;
export const toolDescription = `Retrieve a single CustomerCategory.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/customer_categories/{id}.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the CustomerCategory") }).optional() }).shape;
