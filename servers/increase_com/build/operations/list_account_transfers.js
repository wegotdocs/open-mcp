import { z } from "zod";
export const toolName = `list_account_transfers`;
export const toolDescription = `List Account Transfers`;
export const baseUrl = `https://api.increase.com`;
export const path = `/account_transfers`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "account_id": z.string().describe("Filter Account Transfers to those that originated from the specified Account.").optional(), "created_at.after": z.string().datetime({ offset: true }).describe("Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.before": z.string().datetime({ offset: true }).describe("Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.on_or_after": z.string().datetime({ offset: true }).describe("Return results on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.on_or_before": z.string().datetime({ offset: true }).describe("Return results on or before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional() }).optional() }).shape;
