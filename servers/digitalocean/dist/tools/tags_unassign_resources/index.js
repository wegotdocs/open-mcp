export { inputParams } from "./schema/root.js";
export const toolName = `tags_unassign_resources`;
export const toolDescription = `Untag a Resource`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/tags/{tag_id}/resources`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "tag_id"
    ],
    "cookie": [],
    "body": [
        "resources"
    ]
};
export const flatMap = {};
