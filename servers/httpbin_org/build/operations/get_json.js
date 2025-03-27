import { z } from "zod";
export const toolName = `get_json`;
export const toolDescription = `Returns a simple JSON document.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
