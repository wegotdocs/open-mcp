export { inputParams } from "./schema/root.js";
export const toolName = `get_followed`;
export const toolDescription = `Get Followed Artists`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/following`;
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
        "after",
        "limit"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
