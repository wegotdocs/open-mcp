import { z } from "zod";
export const toolName = `get_image_webp`;
export const toolDescription = `Returns a simple WEBP image.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/image/webp`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
