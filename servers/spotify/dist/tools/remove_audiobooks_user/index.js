export { inputParams } from "./schema/root.js";
export const toolName = `remove_audiobooks_user`;
export const toolDescription = `Remove User's Saved Audiobooks`;
export const baseUrl = `https://api.spotify.com/v1`;
export const path = `/me/audiobooks`;
export const method = `delete`;
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
    "body": []
};
export const flatMap = {};
