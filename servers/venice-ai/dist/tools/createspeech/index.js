export { inputParams } from "./schema/root.js";
export const toolName = `createspeech`;
export const toolDescription = `/api/v1/audio/speech`;
export const baseUrl = `https://api.venice.ai/api/v1`;
export const path = `/audio/speech`;
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
        "input",
        "voice",
        "response_format",
        "speed",
        "streaming"
    ]
};
export const flatMap = {};
