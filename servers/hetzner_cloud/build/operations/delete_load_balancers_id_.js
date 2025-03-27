import { z } from "zod";
export const toolName = `delete_load_balancers_id_`;
export const toolDescription = `Delete a Load Balancer`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/load_balancers/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Load Balancer") }).optional() }).shape;
