export { inputParams } from "./schema/root.js";
export const toolName = `getlibraryanalyticscomponentusages`;
export const toolDescription = `Get library analytics component usage data.`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/analytics/libraries/{file_key}/component/usages`;
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
        "cursor",
        "group_by"
    ],
    "header": [],
    "path": [
        "file_key"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
