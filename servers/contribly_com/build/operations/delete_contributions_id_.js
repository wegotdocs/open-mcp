import { z } from "zod";
export const toolName = `delete_contributions_id_`;
export const toolDescription = `Delete this contribution`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/contributions/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution to delete") }).optional() }).shape;
