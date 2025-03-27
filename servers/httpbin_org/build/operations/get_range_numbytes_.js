import { z } from "zod";
export const toolName = `get_range_numbytes_`;
export const toolDescription = `Streams n random bytes generated with given seed, at given chunk size per packet.`;
export const baseUrl = `https://httpbin.org`;
export const path = `/range/{numbytes}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "numbytes": z.number().int() }).optional() }).shape;
