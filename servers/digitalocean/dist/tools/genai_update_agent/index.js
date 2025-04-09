export { inputParams } from "./schema/root.js";
export const toolName = `genai_update_agent`;
export const toolDescription = `Update an Agent`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{uuid}`;
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
        "anthropic_key_uuid",
        "description",
        "instruction",
        "k",
        "max_tokens",
        "model_uuid",
        "name",
        "open_ai_key_uuid",
        "project_id",
        "retrieval_method",
        "tags",
        "temperature",
        "top_p",
        "b_uuid"
    ]
};
export const flatMap = {
    "b_uuid": "uuid"
};
