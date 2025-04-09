export { inputParams } from "./schema/root.js";
export const toolName = `monitoring_get_dropletmemorytotalmetrics`;
export const toolDescription = `Get Droplet Total Memory Metrics`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/monitoring/metrics/droplet/memory_total`;
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
    "query": [
        "host_id",
        "start",
        "end"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
