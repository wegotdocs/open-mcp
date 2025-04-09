export { inputParams } from "./schema/root.js";
export const toolName = `get_featured_playlists`;
export const toolDescription = `Get Featured Playlists`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/browse/featured-playlists`;
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
        "locale",
        "limit",
        "offset"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
