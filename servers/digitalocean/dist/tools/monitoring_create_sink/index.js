export { inputParams } from "./schema/root.js";
export const toolName = `monitoring_create_sink`;
export const toolDescription = `Create Sink`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/monitoring/sinks`;
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
        "destination_uuid",
        "resources"
    ]
};
export const flatMap = {};
