export { inputParams } from "./schema/root.js";
export const toolName = `volumesnapshots_delete_byid`;
export const toolDescription = `Delete a Volume Snapshot`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/volumes/snapshots/{snapshot_id}`;
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
        "snapshot_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
