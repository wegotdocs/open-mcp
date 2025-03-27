import { z } from "zod";
export const toolName = `enterprise_admin_list_pre_receive_hooks`;
export const toolDescription = `List pre-receive hooks`;
export const baseUrl = `https://github.com`;
export const path = `/admin/pre-receive-hooks`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch."), "direction": z.enum(["asc", "desc"]).describe("The direction to sort the results by."), "sort": z.enum(["created", "updated", "name"]).describe("The property to sort the results by.") }).optional() }).shape;
