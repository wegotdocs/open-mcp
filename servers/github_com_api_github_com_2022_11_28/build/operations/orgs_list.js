import { z } from "zod";
export const toolName = `orgs_list`;
export const toolDescription = `List organizations`;
export const baseUrl = `https://github.com`;
export const path = `/organizations`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "since": z.number().int().describe("An organization ID. Only return organizations with an ID greater than this ID.").optional(), "per_page": z.number().int().describe("The number of results per page (max 100).") }).optional() }).shape;
