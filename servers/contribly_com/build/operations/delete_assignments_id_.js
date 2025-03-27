import { z } from "zod";
export const toolName = `delete_assignments_id_`;
export const toolDescription = `Delete this assignment and all of it's contributions`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/assignments/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the assignment to return") }).optional() }).shape;
