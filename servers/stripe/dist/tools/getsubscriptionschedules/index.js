export { inputParams } from "./schema/root.js";
export const toolName = `getsubscriptionschedules`;
export const toolDescription = `List all schedules`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/subscription_schedules`;
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
        "canceled_at",
        "completed_at",
        "created",
        "customer",
        "ending_before",
        "expand",
        "limit",
        "released_at",
        "scheduled",
        "starting_after"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
