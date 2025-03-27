import { z } from "zod";
export const toolName = `post_custom_fields_json`;
export const toolDescription = `Create a new Custom Field.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/custom_fields.json`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "custom_field": z.object({ "label": z.string().describe("Label given to the Custom Field").optional(), "type": z.enum(["text", "selection", "input"]).describe("Type of the Custom Field").optional(), "values": z.array(z.string()).describe("All the possible Values of the Custom Field (for type 'selection')").optional() }).optional() }).optional() }).shape;
