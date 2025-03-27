import { z } from "zod";
export const toolName = `get_cache_value_`;
export const toolDescription = `Sets a Cache-Control header for n seconds.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/cache/{value}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "value": z.number().int() }).optional() }).shape;
