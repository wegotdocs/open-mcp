export { inputParams } from "./schema/root.js";
export const toolName = `genai_get_openai_api_key`;
export const toolDescription = `Get OpenAI API Key`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/openai/keys/{api_key_uuid}`;
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
        "api_key_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
