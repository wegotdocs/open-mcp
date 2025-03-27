import { z } from "zod";
export const toolName = `get_actions_id_`;
export const toolDescription = `Get an Action`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/actions/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Resource") }).optional() }).shape;
