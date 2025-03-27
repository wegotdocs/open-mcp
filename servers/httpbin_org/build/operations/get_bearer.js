import { z } from "zod";
export const toolName = `get_bearer`;
export const toolDescription = `Prompts the user for authorization using bearer authentication.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/bearer`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "header": z.object({ "Authorization": z.string().optional() }).optional() }).shape;
