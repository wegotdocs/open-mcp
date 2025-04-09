export { inputParams } from "./schema/root.js";
export const toolName = `getteamstyles`;
export const toolDescription = `Get team styles`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/teams/{team_id}/styles`;
export const method = `get`;
export const security = [
    {
        "key": "X-Figma-Token",
        "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "X_FIGMA_TOKEN",
        "schemeType": "apiKey",
        "schemeName": "X-Figma-Token"
    },
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
        "page_size",
        "after",
        "before"
    ],
    "header": [],
    "path": [
        "team_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
