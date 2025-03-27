import { z } from "zod";
export const toolName = `patch_redirect_to`;
export const toolDescription = `302/3XX Redirects to the given URL.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/redirect-to`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({}).shape;
