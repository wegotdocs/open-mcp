import { z } from "zod";
export const toolName = `listavailableemailtemplates`;
export const toolDescription = `List Available Email Templates`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/templates/email/list`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "modified_after": z.string().describe("(Optional) String in ISO 8601\n\nRetrieve only templates updated at or after the given time.").optional(), "modified_before": z.string().describe("(Optional) String in ISO 8601\n\nRetrieve only templates updated at or before the given time").optional(), "limit": z.string().describe("(Optional) Positive Number\n\nMaximum number of templates to retrieve, default to 100 if not provided, maximum acceptable value is 1000.").optional(), "offset": z.string().describe("(Optional) Positive Number\n\nNumber of templates to skip before returning rest of the templates that fit the search criteria.").optional() }).optional() }).shape;
