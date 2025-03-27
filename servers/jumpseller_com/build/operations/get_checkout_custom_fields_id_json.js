import { z } from "zod";
export const toolName = `get_checkout_custom_fields_id_json`;
export const toolDescription = `Retrieve a single CheckoutCustomField.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/checkout_custom_fields/{id}.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the CheckoutCustomField") }).optional() }).shape;
