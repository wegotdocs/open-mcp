import { z } from "zod";
export const toolName = `gists_create`;
export const toolDescription = `Create a gist`;
export const baseUrl = `https://api.github.com`;
export const path = `/gists`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "description": z.string().describe("Description of the gist").optional(), "files": z.record(z.object({ "content": z.string().describe("Content of the file") })).describe("Names and content for the files that make up the gist"), "public": z.boolean().describe("Flag indicating whether the gist is public").optional() }).optional() }).shape;
