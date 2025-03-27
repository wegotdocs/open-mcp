import { z } from "zod";
export const toolName = `get_contributions_id_likes`;
export const toolDescription = `List users who have liked this contributions`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/contributions/{id}/likes`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution") }).optional() }).shape;
