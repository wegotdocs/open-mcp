import { z } from "zod";
export const toolName = `dailyactiveusersbydate`;
export const toolDescription = `Daily Active Users by Date`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/kpi/dau/data_series`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "length": z.string().describe("(Required) Integer\n\nMax number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive").optional(), "ending_at": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nPoint in time when the data series should end - defaults to time of the request").optional(), "app_id": z.string().describe("(Optional) String\n\nApp API identifier; if excluded, results for all apps in app group will be returned").optional() }).optional() }).shape;
