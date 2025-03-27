import { z } from "zod";
export const toolName = `get_load_balancer_types`;
export const toolDescription = `Get all Load Balancer Types`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/load_balancer_types`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter Load Balancer types by their name. The response will only contain the Load Balancer type matching the specified name.").optional() }).optional() }).shape;
