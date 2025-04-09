export { inputParams } from "./schema/root.js";
export const toolName = `createextraction`;
export const toolDescription = `Extracts structured data from a Document`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/extraction`;
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
        "document",
        "expand_abbreviations"
    ]
};
export const flatMap = {};
