export { inputParams } from "./schema/root.js";
export const toolName = `get_a_shows_episodes`;
export const toolDescription = `Get Show Episodes`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/shows/{id}/episodes`;
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
    "path": [
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
