import { z } from "zod";
export const toolName = `get_form_responses_id_`;
export const toolDescription = `Get a single form response by id`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/form-responses/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the assignment to return") }).optional() }).shape;
