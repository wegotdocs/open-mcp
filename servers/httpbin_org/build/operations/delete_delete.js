import { z } from "zod";
export const toolName = `delete_delete`;
export const toolDescription = `The request's DELETE parameters.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/delete`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({}).shape;
