import { z } from "zod";
export const toolName = `post_contributions_id_like`;
export const toolDescription = `Allows a user to mark a contribution as liked`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/contributions/{id}/like`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution") }).optional() }).shape;
