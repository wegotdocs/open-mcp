import { z } from "zod";
export const toolName = `get_scopes`;
export const toolDescription = `Scopes`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/scopes`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
