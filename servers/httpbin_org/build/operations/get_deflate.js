import { z } from "zod";
export const toolName = `get_deflate`;
export const toolDescription = `Returns Deflate-encoded data.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/deflate`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
