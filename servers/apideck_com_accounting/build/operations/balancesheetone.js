import { z } from "zod";
export const toolName = `balancesheetone`;
export const toolDescription = `Get BalanceSheet`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/accounting/balance-sheet`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "pass_through": z.object({ "example_downstream_property": z.string().describe("All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads)").optional() }).catchall(z.any()).describe("Optional unmapped key/values that will be passed through to downstream as query parameters").optional(), "filter": z.object({ "end_date": z.string().describe("Filter by end date. If end date is given, start date is required.").optional(), "start_date": z.string().describe("Filter by start date. If start date is given, end date is required.").optional() }).strict().describe("Apply filters").optional(), "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional() }).shape;
