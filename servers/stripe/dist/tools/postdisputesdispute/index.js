export { inputParams } from "./schema/root.js";
export const toolName = `postdisputesdispute`;
export const toolDescription = `Update a dispute`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/disputes/{dispute}`;
export const method = `post`;
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
    "query": [],
    "header": [],
    "path": [
        "dispute"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
