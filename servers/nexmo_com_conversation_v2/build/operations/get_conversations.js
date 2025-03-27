import { z } from "zod";
export const toolName = `get_conversations`;
export const toolDescription = `List Conversations`;
export const baseUrl = `https://api.nexmo.com/v0.2`;
export const path = `/conversations`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "page_size": z.number().int().lte(100).describe("The number of results returned per page.   The default value is `10`. The maximum value is `100`."), "order": z.enum(["asc", "desc"]).describe("Show the most (`desc`) / least (`asc`) recently created entries first"), "cursor": z.string().describe("The cursor to start returning results from.\n\nYou are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value\n").optional(), "date_start": z.string().describe("Search for conversations created after this ISO8601 date").optional(), "date_end": z.string().describe("Search for conversations created before this ISO8601 date").optional() }).optional() }).shape;
