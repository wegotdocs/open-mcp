import { z } from "zod";
export const toolName = `get_html`;
export const toolDescription = `Returns a simple HTML document.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/html`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
