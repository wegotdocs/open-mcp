import { z } from "zod";
export const toolName = `enterprise_admin_list_public_keys`;
export const toolDescription = `List public keys`;
export const baseUrl = `https://github.com`;
export const path = `/admin/keys`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch."), "direction": z.enum(["asc", "desc"]).describe("The direction to sort the results by."), "sort": z.enum(["created", "updated", "accessed"]), "since": z.string().describe("Only show public keys accessed after the given time.").optional() }).optional() }).shape;
