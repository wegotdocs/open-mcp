import { z } from "zod";
export const toolName = `content_searchcontentbytagandtype`;
export const toolDescription = `Searches for Content Items that match the given Tag and Content Type.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Content/SearchContentByTagAndType/{tag}/{type}/{locale}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "currentpage": z.number().int().describe("Page number for the search results starting with page 1.").optional(), "head": z.boolean().describe("Not used.").optional(), "itemsperpage": z.number().int().describe("Not used.").optional() }).optional(), "path": z.object({ "locale": z.string(), "tag": z.string(), "type": z.string() }).optional() }).shape;
