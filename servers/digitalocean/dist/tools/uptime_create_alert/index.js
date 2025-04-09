export { inputParams } from "./schema/root.js";
export const toolName = `uptime_create_alert`;
export const toolDescription = `Create a New Alert`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/uptime/checks/{check_id}/alerts`;
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
    "path": [
        "check_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
