export { inputParams } from "./schema/root.js";
export const toolName = `getprices`;
export const toolDescription = `List all prices`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/prices`;
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
        "active",
        "created",
        "currency",
        "ending_before",
        "expand",
        "limit",
        "lookup_keys",
        "product",
        "recurring",
        "starting_after",
        "type"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
