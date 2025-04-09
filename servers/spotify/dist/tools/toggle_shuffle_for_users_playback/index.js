export { inputParams } from "./schema/root.js";
export const toolName = `toggle_shuffle_for_users_playback`;
export const toolDescription = `Toggle Playback Shuffle`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/player/shuffle`;
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
        "state",
        "device_id"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
