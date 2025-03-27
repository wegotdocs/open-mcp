import { z } from "zod";
export const toolName = `get_image_svg`;
export const toolDescription = `Returns a simple SVG image.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/image/svg`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
