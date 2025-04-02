import { z } from "zod";
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
export const inputParams = z.object({ "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"), "uris": z.string().describe("A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.\n").optional(), "b_uris": z.array(z.string()).optional(), "range_start": z.number().int().describe("The position of the first item to be reordered.\n").optional(), "insert_before": z.number().int().describe("The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.\n").optional(), "range_length": z.number().int().describe("The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.\n").optional(), "snapshot_id": z.string().describe("The playlist's snapshot ID against which you want to make the changes.\n").optional() }).shape;
