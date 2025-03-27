import { z } from "zod";
export const toolName = `campaignanalytics`;
export const toolDescription = `Campaign Analytics`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/campaigns/data_series`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "campaign_id": z.string().describe("(Required) String\n\nCampaign API identifier").optional(), "length": z.string().describe("(Required) Integer\n\nMax number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive").optional(), "ending_at": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nDate on which the data series should end - defaults to time of the request").optional() }).optional() }).shape;
