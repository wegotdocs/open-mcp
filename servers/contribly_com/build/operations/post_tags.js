import { z } from "zod";
export const toolName = `post_tags`;
export const toolDescription = `Create a new tag`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/tags`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "colour": z.string().optional(), "name": z.string(), "tagSet": z.object({ "id": z.string(), "name": z.string() }).optional(), "urlWords": z.string().optional() }).optional() }).shape;
