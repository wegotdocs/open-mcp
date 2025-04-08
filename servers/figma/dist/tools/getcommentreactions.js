import { z } from "zod";
export const toolName = `getcommentreactions`;
export const toolDescription = `Get reactions for a comment`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/files/{file_key}/comments/{comment_id}/reactions`;
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
        "cursor"
    ],
    "header": [],
    "path": [
        "file_key",
        "comment_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "file_key": z.string().describe("File to get comment containing reactions from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."),
    "comment_id": z.string().describe("ID of comment to get reactions from."),
    "cursor": z.string().describe("Cursor for pagination, retrieved from the response of the previous call.").optional()
};
