import { z } from "zod";
export const toolName = `get_customers_id_fields`;
export const toolDescription = `Retrieves the Customer Additional Field of a Customer.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/customers/{id}/fields`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Customer") }).optional() }).shape;
