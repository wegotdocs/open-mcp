import { z } from "zod";
export const toolName = `get_contributions_id_`;
export const toolDescription = `Get a single contribution by id`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/contributions/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution to return") }).optional() }).shape;
