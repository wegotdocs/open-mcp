import { z } from "zod";
export const toolName = `postcomment`;
export const toolDescription = `Add a comment to a file`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/files/{file_key}/comments`;
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
        "file_key"
    ],
    "cookie": [],
    "body": [
        "message",
        "comment_id",
        "client_meta"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "file_key": z.string().describe("File to add comments in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."), "message": z.string().describe("The text contents of the comment to post."), "comment_id": z.string().describe("The ID of the comment to reply to, if any. This must be a root comment. You cannot reply to other replies (a comment that has a parent_id).").optional(), "client_meta": z.object({ "x": z.number().describe("X coordinate of the vector."), "y": z.number().describe("Y coordinate of the vector.") }).describe("A 2d vector.").describe("The position where to place the comment.").optional() }).shape;
