import { z } from "zod";
export const toolName = `delete_forms_id_`;
export const toolDescription = `Delete this form and all of it's responses.`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/forms/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the form to delete") }).optional() }).shape;
