import { z } from "zod";
export const toolName = `get_locations`;
export const toolDescription = `Get all Locations`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/locations`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter Locations by their name. The response will only contain the Location matching the specified name.").optional() }).optional() }).shape;
