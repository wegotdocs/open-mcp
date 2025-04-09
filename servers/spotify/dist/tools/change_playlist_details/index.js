export { inputParams } from "./schema/root.js";
export const toolName = `change_playlist_details`;
export const toolDescription = `Change Playlist Details`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/playlists/{playlist_id}`;
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
    "query": [],
    "header": [],
    "path": [
        "playlist_id"
    ],
    "cookie": [],
    "body": [
        "name",
        "public",
        "collaborative",
        "description"
    ]
};
export const flatMap = {};
