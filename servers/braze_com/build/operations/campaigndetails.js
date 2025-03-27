import { z } from "zod";
export const toolName = `campaigndetails`;
export const toolDescription = `Campaign Details`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/campaigns/details`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "campaign_id": z.string().describe("(Required) String\n\nCampaign API identifier").optional() }).optional() }).shape;
