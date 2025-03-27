import { z } from "zod";
export const toolName = `get_redirect_to`;
export const toolDescription = `302/3XX Redirects to the given URL.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/redirect-to`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "url": z.string(), "status_code": z.number().int().optional() }).optional() }).shape;
