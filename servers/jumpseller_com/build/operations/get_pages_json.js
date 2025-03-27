import { z } from "zod";
export const toolName = `get_pages_json`;
export const toolDescription = `Retrieve all Pages.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/pages.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "limit": z.number().int().lte(200).describe("List restriction"), "page": z.number().int().describe("List page") }).optional() }).shape;
