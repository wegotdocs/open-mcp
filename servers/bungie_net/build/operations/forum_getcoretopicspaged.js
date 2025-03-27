import { z } from "zod";
export const toolName = `forum_getcoretopicspaged`;
export const toolDescription = `Gets a listing of all topics marked as part of the core group.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "categoryFilter": z.number().int().describe("The category filter."), "page": z.number().int().describe("Zero base page"), "quickDate": z.number().int().describe("The date filter."), "sort": z.number().int().describe("The sort mode.") }).optional(), "query": z.object({ "locales": z.string().describe("Comma seperated list of locales posts must match to return in the result list. Default 'en'").optional() }).optional() }).shape;
