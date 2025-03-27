import { z } from "zod";
export const toolName = `codes_of_conduct_get_conduct_code`;
export const toolDescription = `Get a code of conduct`;
export const baseUrl = `https://api.github.com`;
export const path = `/codes_of_conduct/{key}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "key": z.string() }).optional() }).shape;
