export { inputParams } from "./schema/root.js";
export const toolName = `createconfigurablelogdrain`;
export const toolDescription = `Creates a Configurable Log Drain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/log-drains`;
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
    "query": [
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "deliveryFormat",
        "url",
        "headers",
        "projectIds",
        "sources",
        "environments",
        "secret",
        "samplingRate",
        "name"
    ]
};
export const flatMap = {};
