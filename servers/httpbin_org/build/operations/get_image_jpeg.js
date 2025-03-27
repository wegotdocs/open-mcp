import { z } from "zod";
export const toolName = `get_image_jpeg`;
export const toolDescription = `Returns a simple JPEG image.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/image/jpeg`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
