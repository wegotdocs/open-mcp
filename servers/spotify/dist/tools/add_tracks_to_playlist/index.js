export { inputParams } from "./schema/root.js";
export const toolName = `add_tracks_to_playlist`;
export const toolDescription = `Add Items to Playlist`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/playlists/{playlist_id}/tracks`;
export const method = `post`;
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
        "position",
        "uris"
    ],
    "header": [],
    "path": [
        "playlist_id"
    ],
    "cookie": [],
    "body": [
        "b_uris",
        "b_position"
    ]
};
export const flatMap = {
    "b_uris": "uris",
    "b_position": "position"
};
