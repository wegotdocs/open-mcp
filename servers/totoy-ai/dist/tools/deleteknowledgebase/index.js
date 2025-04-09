export { inputParams } from "./schema/root.js";
export const toolName = `deleteknowledgebase`;
export const toolDescription = `Deletes a Knowledge Base.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/knowledge-bases/{knowledge_base_id}`;
export const method = `delete`;
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
        "knowledge_base_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
