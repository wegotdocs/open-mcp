export { inputParams } from "./schema/root.js";
export const toolName = `loadbalancers_remove_droplets`;
export const toolDescription = `Remove Droplets from a Load Balancer`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/load_balancers/{lb_id}/droplets`;
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
        "lb_id"
    ],
    "cookie": [],
    "body": [
        "droplet_ids"
    ]
};
export const flatMap = {};
