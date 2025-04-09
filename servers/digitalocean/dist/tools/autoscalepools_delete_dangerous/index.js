export { inputParams } from "./schema/root.js";
export const toolName = `autoscalepools_delete_dangerous`;
export const toolDescription = `Delete autoscale pool and resources`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/autoscale/{autoscale_pool_id}/dangerous`;
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
    "header": [
        "X-Dangerous"
    ],
    "path": [
        "autoscale_pool_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
