export { inputParams } from "./schema/root.js";
export const toolName = `autoscalepools_update`;
export const toolDescription = `Update Autoscale Pool`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/autoscale/{autoscale_pool_id}`;
export const method = `put`;
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
        "autoscale_pool_id"
    ],
    "cookie": [],
    "body": [
        "name",
        "config",
        "droplet_template"
    ]
};
export const flatMap = {};
