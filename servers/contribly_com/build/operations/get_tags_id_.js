import { z } from "zod";
export const toolName = `get_tags_id_`;
export const toolDescription = `Retrieve a single tag by id`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/tags/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the tag to return") }).optional() }).shape;
