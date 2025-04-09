export { inputParams } from "./schema/root.js";
export const toolName = `get_the_users_currently_playing_track`;
export const toolDescription = `Get Currently Playing Track`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/player/currently-playing`;
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
        "additional_types"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
