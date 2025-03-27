import { z } from "zod";
export const toolName = `newsfeedcardanalytics`;
export const toolDescription = `News Feed Card Analytics`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/feed/data_series`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "card_id": z.string().describe("(Required) String\n\nCard API identifier").optional(), "length": z.string().describe("(Required) Integer\n\nMax number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive").optional(), "unit": z.string().describe("(Optional) String\n\nUnit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\")").optional(), "ending_at": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nDate on which the data series should end - defaults to time of the request").optional() }).optional() }).shape;
