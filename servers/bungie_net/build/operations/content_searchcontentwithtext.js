import { z } from "zod";
export const toolName = `content_searchcontentwithtext`;
export const toolDescription = `Gets content based on querystring information passed in. Provides basic search and text search capabilities.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Content/Search/{locale}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "ctype": z.string().describe("Content type tag: Help, News, etc. Supply multiple ctypes separated by space.").optional(), "currentpage": z.number().int().describe("Page number for the search results, starting with page 1.").optional(), "head": z.boolean().describe("Not used.").optional(), "searchtext": z.string().describe("Word or phrase for the search.").optional(), "source": z.string().describe("For analytics, hint at the part of the app that triggered the search. Optional.").optional(), "tag": z.string().describe("Tag used on the content to be searched.").optional() }).optional(), "path": z.object({ "locale": z.string() }).optional() }).shape;
