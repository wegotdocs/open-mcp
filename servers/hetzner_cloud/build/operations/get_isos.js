import { z } from "zod";
export const toolName = `get_isos`;
export const toolDescription = `Get all ISOs`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/isos`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter ISOs by their name. The response will only contain the ISO matching the specified name.").optional() }).optional() }).shape;
