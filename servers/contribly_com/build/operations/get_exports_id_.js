import { z } from "zod";
export const toolName = `get_exports_id_`;
export const toolDescription = `Get a single export job; poll to follow export progress.`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/exports/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the export job to return") }).optional() }).shape;
