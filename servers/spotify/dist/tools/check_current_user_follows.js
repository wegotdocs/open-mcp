import { z } from "zod";
export const toolName = `check_current_user_follows`;
export const toolDescription = `Check If User Follows Artists or Users`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/following/contains`;
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
        "type",
        "ids"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "type": z.enum(["artist", "user"]).describe("The ID type: either `artist` or `user`.\n"),
    "ids": z.string().describe("A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n")
};
