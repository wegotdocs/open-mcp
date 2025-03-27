import { z } from "zod";
export const toolName = `activity_list_public_events`;
export const toolDescription = `List public events`;
export const baseUrl = `https://api.github.com`;
export const path = `/events`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
