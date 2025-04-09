export { inputParams } from "./schema/root.js";
export const toolName = `genai_list_knowledge_base_data_sources`;
export const toolDescription = `List Data Sources for a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`;
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
        "knowledge_base_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
