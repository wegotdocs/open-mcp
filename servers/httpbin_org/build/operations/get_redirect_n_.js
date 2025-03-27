import { z } from "zod";
export const toolName = `get_redirect_n_`;
export const toolDescription = `302 Redirects n times.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/redirect/{n}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "n": z.number().int() }).optional() }).shape;
