export { inputParams } from "./schema/root.js";
export const toolName = `genai_list_models`;
export const toolDescription = `List Available Models`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/models`;
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
        "usecases",
        "public_only",
        "page",
        "per_page"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
