export { inputParams } from "./schema/root.js";
export const toolName = `gitnamespaces`;
export const toolDescription = `List git namespaces by provider`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/integrations/git-namespaces`;
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
        "host",
        "provider"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
