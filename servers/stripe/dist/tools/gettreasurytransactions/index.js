export { inputParams } from "./schema/root.js";
export const toolName = `gettreasurytransactions`;
export const toolDescription = `List all Transactions`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/treasury/transactions`;
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
        "created",
        "ending_before",
        "expand",
        "financial_account",
        "limit",
        "order_by",
        "starting_after",
        "status",
        "status_transitions"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
