import { z } from "zod";
export const toolName = `newsfeedcardsdetails`;
export const toolDescription = `News Feed Cards Details`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/feed/details`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "card_id": z.string().describe("(Required) String\n\nCard API identifier ").optional() }).optional() }).shape;
