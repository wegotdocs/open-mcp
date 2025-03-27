import { z } from "zod";
export const toolName = `licenses_get_all_commonly_used`;
export const toolDescription = `Get all commonly used licenses`;
export const baseUrl = `https://api.github.com`;
export const path = `/licenses`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "featured": z.boolean().optional(), "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
