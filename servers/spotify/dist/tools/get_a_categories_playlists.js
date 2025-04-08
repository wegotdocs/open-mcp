import { z } from "zod";
export const toolName = `get_a_categories_playlists`;
export const toolDescription = `Get Category's Playlists`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/browse/categories/{category_id}/playlists`;
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
        "offset"
    ],
    "header": [],
    "path": [
        "category_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "category_id": z.string().describe("The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n"),
    "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
    "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
};
