import { z } from "zod";
export const toolName = `listmodelcompatibilitymapping`;
export const toolDescription = `/api/v1/models/compatibility_mapping`;
export const baseUrl = `https://api.venice.ai/api/v1`;
export const path = `/models/compatibility_mapping`;
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
        "type"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "type": z.enum(["image", "text", "embedding", "tts"]).describe("Filter models by type.").optional()
};
