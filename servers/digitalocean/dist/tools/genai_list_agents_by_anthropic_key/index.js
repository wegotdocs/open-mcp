export { inputParams } from "./schema/root.js";
export const toolName = `genai_list_agents_by_anthropic_key`;
export const toolDescription = `List agents by Anthropic key`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/anthropic/keys/{uuid}/agents`;
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
        "page",
        "per_page"
    ],
    "header": [],
    "path": [
        "uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
