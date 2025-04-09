export { inputParams } from "./schema/root.js";
export const toolName = `getfileversions`;
export const toolDescription = `Get versions of a file`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/files/{file_key}/versions`;
export const method = `get`;
export const security = [
    {
        "key": "X-Figma-Token",
        "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "X_FIGMA_TOKEN",
        "schemeType": "apiKey",
        "schemeName": "X-Figma-Token"
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
    "query": [
        "page_size",
        "before",
        "after"
    ],
    "header": [],
    "path": [
        "file_key"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
