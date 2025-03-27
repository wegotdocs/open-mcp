import { z } from "zod";
export const toolName = `collectionsall`;
export const toolDescription = `List collections`;
export const baseUrl = `https://api.apideck.com`;
export const path = `/ecosystems/{ecosystem_id}/collections`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "ecosystem_id": z.string() }).optional(), "query": z.object({ "cursor": z.string().nullable().describe("Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.").optional(), "limit": z.number().int().gte(1).lte(200).describe("Number of records to return") }).optional() }).shape;
