import { z } from "zod";
export const toolName = `get_isos_id_`;
export const toolDescription = `Get an ISO`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/isos/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the ISO") }).optional() }).shape;
