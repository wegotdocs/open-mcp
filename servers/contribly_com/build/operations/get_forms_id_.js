import { z } from "zod";
export const toolName = `get_forms_id_`;
export const toolDescription = `Get a single form by id`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/forms/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the form to return") }).optional() }).shape;
