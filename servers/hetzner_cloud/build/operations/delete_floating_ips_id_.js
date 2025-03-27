import { z } from "zod";
export const toolName = `delete_floating_ips_id_`;
export const toolDescription = `Delete a Floating IP`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/floating_ips/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Floating IP") }).optional() }).shape;
