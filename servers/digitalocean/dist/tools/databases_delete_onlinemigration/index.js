export { inputParams } from "./schema/root.js";
export const toolName = `databases_delete_onlinemigration`;
export const toolDescription = `Stop an Online Migration`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/databases/{database_cluster_uuid}/online-migration/{migration_id}`;
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
        "database_cluster_uuid",
        "migration_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
