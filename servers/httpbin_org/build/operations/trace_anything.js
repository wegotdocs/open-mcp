import { z } from "zod";
export const toolName = `trace_anything`;
export const toolDescription = `Returns anything passed in request data.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/anything`;
export const method = `trace`;
export const security = [];
export const inputParams = z.object({}).shape;
