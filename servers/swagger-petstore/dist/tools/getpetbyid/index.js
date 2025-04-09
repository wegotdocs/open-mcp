export { inputParams } from "./schema/root.js";
export const toolName = `getpetbyid`;
export const toolDescription = `Find pet by ID.`;
export const baseUrl = `https://petstore3.swagger.io/api/v3`;
export const path = `/pet/{petId}`;
export const method = `get`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "petId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
