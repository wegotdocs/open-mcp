export { inputParams } from "./schema/root.js";
export const toolName = `floatingipsaction_get`;
export const toolDescription = `Retrieve an Existing Floating IP Action`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/floating_ips/{floating_ip}/actions/{action_id}`;
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
    "query": [],
    "header": [],
    "path": [
        "floating_ip",
        "action_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
