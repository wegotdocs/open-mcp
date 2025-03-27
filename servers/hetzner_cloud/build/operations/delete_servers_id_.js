import { z } from "zod";
export const toolName = `delete_servers_id_`;
export const toolDescription = `Delete a Server`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/servers/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Server") }).optional() }).shape;
