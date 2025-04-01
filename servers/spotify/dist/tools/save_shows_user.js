import { z } from "zod";
export const toolName = `save_shows_user`;
export const toolDescription = `Save Shows for Current User`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/shows`;
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
export const inputParams = z.object({ "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n"), "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  \nA maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*").optional() }).shape;
