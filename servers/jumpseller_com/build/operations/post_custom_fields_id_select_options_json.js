import { z } from "zod";
export const toolName = `post_custom_fields_id_select_options_json`;
export const toolDescription = `Create a new Custom Field Select Option.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/custom_fields/{id}/select_options.json`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.string().describe("Automatically added") }).optional(), "body": z.object({ "custom_field_select_option": z.object({ "value": z.string().describe("Value given to the Custom Field Select Option").optional() }).optional() }).optional() }).shape;
