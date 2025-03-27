import { z } from "zod";
export const toolName = `activity_list_public_events_for_repo_network`;
export const toolDescription = `List public events for a network of repositories`;
export const baseUrl = `https://api.github.com`;
export const path = `/networks/{owner}/{repo}/events`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."), "repo": z.string().describe("The name of the repository. The name is not case sensitive.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
