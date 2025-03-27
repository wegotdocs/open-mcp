import { z } from "zod";
export const toolName = `put_custom_fields_id_select_options_custom_field_select_option_i`;
export const toolDescription = `Update a SelectOption from a CustomField.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/custom_fields/{id}/select_options/{custom_field_select_option_id}.json`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the CustomField"), "custom_field_select_option_id": z.number().int().describe("Id of the CustomFieldSelectOption") }).optional(), "body": z.object({ "custom_field_select_option": z.object({ "value": z.string().describe("Value given to the Custom Field Select Option").optional() }).optional() }).optional() }).shape;
