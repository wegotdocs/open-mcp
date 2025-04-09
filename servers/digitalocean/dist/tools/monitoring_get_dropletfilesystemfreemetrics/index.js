export { inputParams } from "./schema/root.js";
export const toolName = `monitoring_get_dropletfilesystemfreemetrics`;
export const toolDescription = `Get Droplet Filesystem Free Metrics`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/monitoring/metrics/droplet/filesystem_free`;
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
