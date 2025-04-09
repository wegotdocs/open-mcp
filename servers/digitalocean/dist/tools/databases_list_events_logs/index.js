export { inputParams } from "./schema/root.js";
export const toolName = `databases_list_events_logs`;
export const toolDescription = `List all Events Logs`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/databases/{database_cluster_uuid}/events`;
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
        "database_cluster_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
