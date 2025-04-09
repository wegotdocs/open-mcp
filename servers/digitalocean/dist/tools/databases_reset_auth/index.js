export { inputParams } from "./schema/root.js";
export const toolName = `databases_reset_auth`;
export const toolDescription = `Reset a Database User's Password or Authentication Method`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/databases/{database_cluster_uuid}/users/{username}/reset_auth`;
export const method = `post`;
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
        "database_cluster_uuid",
        "username"
    ],
    "cookie": [],
    "body": [
        "mysql_settings"
    ]
};
export const flatMap = {};
