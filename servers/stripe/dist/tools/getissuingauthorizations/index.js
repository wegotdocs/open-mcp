export { inputParams } from "./schema/root.js";
export const toolName = `getissuingauthorizations`;
export const toolDescription = `List all authorizations`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/issuing/authorizations`;
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
        "card",
        "cardholder",
        "created",
        "ending_before",
        "expand",
        "limit",
        "starting_after",
        "status"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
