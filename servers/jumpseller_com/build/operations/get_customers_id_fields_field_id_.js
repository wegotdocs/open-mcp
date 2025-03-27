import { z } from "zod";
export const toolName = `get_customers_id_fields_field_id_`;
export const toolDescription = `Retrieve a single Customer Additional Field.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/customers/{id}/fields/{field_id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Customer"), "field_id": z.number().int().describe("Id of the Customer Additional Field") }).optional() }).shape;
