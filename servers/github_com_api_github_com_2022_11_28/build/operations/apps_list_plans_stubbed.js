import { z } from "zod";
export const toolName = `apps_list_plans_stubbed`;
export const toolDescription = `List plans (stubbed)`;
export const baseUrl = `https://github.com`;
export const path = `/marketplace_listing/stubbed/plans`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
