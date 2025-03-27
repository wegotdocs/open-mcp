import { z } from "zod";
export const toolName = `activity_list_notifications_for_authenticated_user`;
export const toolDescription = `List notifications for the authenticated user`;
export const baseUrl = `https://github.com`;
export const path = `/notifications`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "all": z.boolean().describe("If `true`, show notifications marked as read."), "participating": z.boolean().describe("If `true`, only shows notifications in which the user is directly participating or mentioned."), "since": z.string().datetime({ offset: true }).describe("Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(), "before": z.string().datetime({ offset: true }).describe("Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(), "page": z.number().int().describe("Page number of the results to fetch."), "per_page": z.number().int().describe("The number of results per page (max 50).") }).optional() }).shape;
