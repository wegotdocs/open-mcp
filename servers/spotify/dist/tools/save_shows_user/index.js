export { inputParams } from "./schema/root.js";
export const toolName = `save_shows_user`;
export const toolDescription = `Save Shows for Current User`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/shows`;
export const method = `put`;
export const security = [
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
        "ids"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "b_ids"
    ]
};
export const flatMap = {
    "b_ids": "ids"
};
