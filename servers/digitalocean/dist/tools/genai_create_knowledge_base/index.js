export { inputParams } from "./schema/root.js";
export const toolName = `genai_create_knowledge_base`;
export const toolDescription = `Create a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/knowledge_bases`;
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
        "database_id",
        "datasources",
        "embedding_model_uuid",
        "name",
        "project_id",
        "region",
        "tags",
        "vpc_uuid"
    ]
};
export const flatMap = {};
