import { z } from "zod";
export const toolName = `get_image`;
export const toolDescription = `Returns a simple image of the type suggest by the Accept header.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/image`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
