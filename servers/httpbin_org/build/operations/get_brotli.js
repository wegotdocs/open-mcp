import { z } from "zod";
export const toolName = `get_brotli`;
export const toolDescription = `Returns Brotli-encoded data.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/brotli`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
