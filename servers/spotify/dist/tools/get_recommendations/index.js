export { inputParams } from "./schema/root.js";
export const toolName = `get_recommendations`;
export const toolDescription = `Get Recommendations`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/recommendations`;
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
        "limit",
        "market",
        "seed_artists",
        "seed_genres",
        "seed_tracks",
        "min_acousticness",
        "max_acousticness",
        "target_acousticness",
        "min_danceability",
        "max_danceability",
        "target_danceability",
        "min_duration_ms",
        "max_duration_ms",
        "target_duration_ms",
        "min_energy",
        "max_energy",
        "target_energy",
        "min_instrumentalness",
        "max_instrumentalness",
        "target_instrumentalness",
        "min_key",
        "max_key",
        "target_key",
        "min_liveness",
        "max_liveness",
        "target_liveness",
        "min_loudness",
        "max_loudness",
        "target_loudness",
        "min_mode",
        "max_mode",
        "target_mode",
        "min_popularity",
        "max_popularity",
        "target_popularity",
        "min_speechiness",
        "max_speechiness",
        "target_speechiness",
        "min_tempo",
        "max_tempo",
        "target_tempo",
        "min_time_signature",
        "max_time_signature",
        "target_time_signature",
        "min_valence",
        "max_valence",
        "target_valence"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
