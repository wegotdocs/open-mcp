import { z } from "zod";
export const toolName = `follow_artists_users`;
export const toolDescription = `Follow Artists or Users`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/following`;
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
        "type",
        "ids"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "b_ids"
    ]
};
export const flatMap = {
    "b_ids": "ids"
};
export const inputParams = z.object({ "type": z.enum(["artist", "user"]).describe("The ID type.\n"), "ids": z.string().describe("A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nA maximum of 50 IDs can be sent in one request.\n"), "b_ids": z.array(z.string()).describe("A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nFor example: `{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n") }).shape;
