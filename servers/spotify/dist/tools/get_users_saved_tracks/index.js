export { inputParams } from "./schema/root.js";
export const toolName = `get_users_saved_tracks`;
export const toolDescription = `Get User's Saved Tracks`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/tracks`;
export const method = `get`;
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
        "market",
        "limit",
        "offset"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
