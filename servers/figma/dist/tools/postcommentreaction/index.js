export { inputParams } from "./schema/root.js";
export const toolName = `postcommentreaction`;
export const toolDescription = `Add a reaction to a comment`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/files/{file_key}/comments/{comment_id}/reactions`;
export const method = `post`;
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
    "query": [],
    "header": [],
    "path": [
        "file_key",
        "comment_id"
    ],
    "cookie": [],
    "body": [
        "emoji"
    ]
};
export const flatMap = {};
