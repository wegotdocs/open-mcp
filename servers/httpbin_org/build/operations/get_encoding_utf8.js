import { z } from "zod";
export const toolName = `get_encoding_utf8`;
export const toolDescription = `Returns a UTF-8 encoded body.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/encoding/utf8`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
