import { z } from "zod";
export const toolName = `meta_get`;
export const toolDescription = `Get GitHub meta information`;
export const baseUrl = `https://api.github.com`;
export const path = `/meta`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
