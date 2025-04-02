import { z } from "zod";
export const toolName = `get_audio_features`;
export const toolDescription = `Get Track's Audio Features`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/audio-features/{id}`;
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
    "query": [],
    "header": [],
    "path": [
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n") }).shape;
