import { z } from "zod";
export const toolName = `list_pending_transactions`;
export const toolDescription = `List Pending Transactions`;
export const baseUrl = `https://api.increase.com`;
export const path = `/pending_transactions`;
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
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "account_id": z.string().describe("Filter pending transactions to those belonging to the specified Account.").optional(), "route_id": z.string().describe("Filter pending transactions to those belonging to the specified Route.").optional(), "source_id": z.string().describe("Filter pending transactions to those caused by the specified source.").optional(), "status.in": z.array(z.enum(["pending", "complete"])).describe("Return results whose value is in the provided list. For GET requests, this should be encoded as a comma-delimited string, such as `?in=one,two,three`.").optional() }).optional() }).shape;
