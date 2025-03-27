import { z } from "zod";
export const toolName = `get_checkout_custom_fields_json`;
export const toolDescription = `Retrieve all Checkout Custom Fields.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/checkout_custom_fields.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "limit": z.number().int().lte(200).describe("List restriction"), "page": z.number().int().describe("List page") }).optional() }).shape;
