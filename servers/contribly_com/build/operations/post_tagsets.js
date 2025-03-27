import { z } from "zod";
export const toolName = `post_tagsets`;
export const toolDescription = `Create a new tag set`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/tagsets`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "name": z.string(), "urlWords": z.string() }).optional() }).shape;
