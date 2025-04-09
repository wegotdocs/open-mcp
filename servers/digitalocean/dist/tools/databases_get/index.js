export { inputParams } from "./schema/root.js";
export const toolName = `databases_get`;
export const toolDescription = `Retrieve an Existing Database`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/databases/{database_cluster_uuid}/dbs/{database_name}`;
export const method = `get`;
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
        "database_name"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
