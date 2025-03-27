import { z } from "zod";
export const toolName = `get_assignments`;
export const toolDescription = `List assignments`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/assignments`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "ownedBy": z.string().describe("Restrict results to assignments owned by this user.").optional(), "page": z.number().int().describe("Pagination page").optional(), "pageSize": z.number().int().describe("Pagination page size").optional(), "q": z.string().describe("Restrict results to assignments whose name or description matches this keyword.").optional(), "urlWords": z.string().describe("Select an assignment by urlWords.").optional(), "open": z.boolean().describe("Select open or closed assignments").optional(), "alwaysOpen": z.boolean().describe("Select assignments with no closing date.").optional(), "tag": z.string().describe("Restrict results to assignments which are tagged with this tag.").optional(), "name": z.string().describe("Restrict results to the assignment (or potentially assignments) with this exact name").optional() }).optional() }).shape;
