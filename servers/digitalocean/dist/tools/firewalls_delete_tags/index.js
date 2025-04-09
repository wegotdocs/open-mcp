export { inputParams } from "./schema/root.js";
export const toolName = `firewalls_delete_tags`;
export const toolDescription = `Remove Tags from a Firewall`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/firewalls/{firewall_id}/tags`;
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
        "firewall_id"
    ],
    "cookie": [],
    "body": [
        "tags"
    ]
};
export const flatMap = {};
