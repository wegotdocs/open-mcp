import { z } from "zod";
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
export const inputParams = z.object({ "file_key": z.string().describe("File to post comment reactions to. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."), "comment_id": z.string().describe("ID of comment to react to."), "emoji": z.string().describe("The emoji type of reaction as shortcode (e.g. `:heart:`, `:+1::skin-tone-2:`). The list of accepted emoji shortcodes can be found in [this file](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json) under the top-level emojis and aliases fields, with optional skin tone modifiers when applicable.") }).shape;
