export { inputParams } from "./schema/root.js";
export const toolName = `apps_list_metrics_bandwidth_daily`;
export const toolDescription = `Retrieve Multiple Apps' Daily Bandwidth Metrics`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps/metrics/bandwidth_daily`;
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
    "path": [],
    "cookie": [],
    "body": [
        "app_ids",
        "date"
    ]
};
export const flatMap = {};
