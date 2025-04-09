export { inputParams } from "./schema/root.js";
export const toolName = `createknowledgebase`;
export const toolDescription = `Creates a Knowledge Base.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/knowledge-bases`;
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
        "name",
        "instructions",
        "project_id"
    ]
};
export const flatMap = {};
