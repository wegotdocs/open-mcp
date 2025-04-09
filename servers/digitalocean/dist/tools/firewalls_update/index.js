export { inputParams } from "./schema/root.js";
export const toolName = `firewalls_update`;
export const toolDescription = `Update a Firewall`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/firewalls/{firewall_id}`;
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
        "firewall_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
