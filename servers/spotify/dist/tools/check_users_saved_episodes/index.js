export { inputParams } from "./schema/root.js";
export const toolName = `check_users_saved_episodes`;
export const toolDescription = `Check User's Saved Episodes`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/episodes/contains`;
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
        "ids"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
