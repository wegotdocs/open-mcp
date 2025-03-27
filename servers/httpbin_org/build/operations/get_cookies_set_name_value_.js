import { z } from "zod";
export const toolName = `get_cookies_set_name_value_`;
export const toolDescription = `Sets a cookie and redirects to cookie list.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/cookies/set/{name}/{value}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "name": z.string(), "value": z.string() }).optional() }).shape;
