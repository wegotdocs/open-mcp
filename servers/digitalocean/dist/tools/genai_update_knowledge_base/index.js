export { inputParams } from "./schema/root.js";
export const toolName = `genai_update_knowledge_base`;
export const toolDescription = `Update a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/knowledge_bases/{uuid}`;
export const method = `put`;
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
        "uuid"
    ],
    "cookie": [],
    "body": [
        "database_id",
        "embedding_model_uuid",
        "name",
        "project_id",
        "tags",
        "b_uuid"
    ]
};
export const flatMap = {
    "b_uuid": "uuid"
};
