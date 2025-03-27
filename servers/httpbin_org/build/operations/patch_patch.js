import { z } from "zod";
export const toolName = `patch_patch`;
export const toolDescription = `The request's PATCH parameters.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/patch`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({}).shape;
