export { inputParams } from "./schema/root.js";
export const toolName = `getbillingmetersideventsummaries`;
export const toolDescription = `List billing meter event summaries`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/billing/meters/{id}/event_summaries`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "customer",
        "end_time",
        "ending_before",
        "expand",
        "limit",
        "start_time",
        "starting_after",
        "value_grouping_window"
    ],
    "header": [],
    "path": [
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
