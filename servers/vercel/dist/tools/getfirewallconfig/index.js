export { inputParams } from "./schema/root.js";
export const toolName = `getfirewallconfig`;
export const toolDescription = `Read Firewall Configuration`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/security/firewall/config/{configVersion}`;
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
        "projectId",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
