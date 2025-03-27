import { z } from "zod";
export const toolName = `list_and_search_media_items`;
export const toolDescription = `List and search media items`;
export const baseUrl = `https://api.nexmo.com/v3/media`;
export const path = `/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "order": z.enum(["ascending", "descending"]).describe("The order of search results."), "page_index": z.number().int().describe("Which page to retrieve in pagination"), "page_size": z.number().int().describe("How many items at most per page"), "start_time": z.string().describe("Retrieve results created on or after this timestap."), "end_time": z.string().describe("Retrieve results created on or before this timestamp.").optional() }).optional() }).shape;
