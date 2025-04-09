export { inputParams } from "./schema/root.js";
export const toolName = `monitoring_delete_sink`;
export const toolDescription = `Delete Sink`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/monitoring/sinks/{sink_uuid}`;
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
        "sink_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
