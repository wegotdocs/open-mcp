export { inputParams } from "./schema/root.js";
export const toolName = `createclassification`;
export const toolDescription = `Classifies a Document into labels based on its content.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/classification`;
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
        "model",
        "document"
    ]
};
export const flatMap = {};
