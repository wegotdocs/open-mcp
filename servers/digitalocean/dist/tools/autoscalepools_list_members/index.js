export { inputParams } from "./schema/root.js";
export const toolName = `autoscalepools_list_members`;
export const toolDescription = `List members`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/autoscale/{autoscale_pool_id}/members`;
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
        "per_page",
        "page"
    ],
    "header": [],
    "path": [
        "autoscale_pool_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
