export { inputParams } from "./schema/root.js";
export const toolName = `droplets_list_firewalls`;
export const toolDescription = `List all Firewalls Applied to a Droplet`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/{droplet_id}/firewalls`;
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
        "droplet_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
