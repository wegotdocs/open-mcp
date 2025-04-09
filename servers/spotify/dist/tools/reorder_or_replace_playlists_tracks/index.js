export { inputParams } from "./schema/root.js";
export const toolName = `reorder_or_replace_playlists_tracks`;
export const toolDescription = `Update Playlist Items`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/playlists/{playlist_id}/tracks`;
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
        "uris"
    ],
    "header": [],
    "path": [
        "playlist_id"
    ],
    "cookie": [],
    "body": [
        "b_uris",
        "range_start",
        "insert_before",
        "range_length",
        "snapshot_id"
    ]
};
export const flatMap = {
    "b_uris": "uris"
};
