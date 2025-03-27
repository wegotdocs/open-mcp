import { z } from "zod";
export const toolName = `actions_list_self_hosted_runners_for_org`;
export const toolDescription = `List self-hosted runners for an organization`;
export const baseUrl = `https://github.com`;
export const path = `/orgs/{org}/actions/runners`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
