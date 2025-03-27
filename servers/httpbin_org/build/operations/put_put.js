import { z } from "zod";
export const toolName = `put_put`;
export const toolDescription = `The request's PUT parameters.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/put`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({}).shape;
