import { z } from "zod";
export const toolName = `get_pricing`;
export const toolDescription = `Get all prices`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/pricing`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
