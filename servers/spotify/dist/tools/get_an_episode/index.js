export { inputParams } from "./schema/root.js";
export const toolName = `get_an_episode`;
export const toolDescription = `Get Episode`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/episodes/{id}`;
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
        "market"
    ],
    "header": [],
    "path": [
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
