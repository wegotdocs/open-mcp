export { inputParams } from "./schema/root.js";
export const toolName = `recordevents`;
export const toolDescription = `Record an artifacts cache usage event`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v8/artifacts/events`;
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
    "header": [
        "x-artifact-client-ci",
        "x-artifact-client-interactive"
    ],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
