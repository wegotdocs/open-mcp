import { z } from "zod";
export const toolName = `get_credentials`;
export const toolDescription = `List the credentials associated with the authenticated user.`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/credentials`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
