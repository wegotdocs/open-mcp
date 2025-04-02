import { z } from "zod";
export const toolName = `deleteapikey`;
export const toolDescription = `/api/v1/api_keys`;
export const baseUrl = `https://api.venice.ai/api/v1`;
export const path = `/api_keys`;
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
    "query": [
        "id"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("The ID of the API key to delete").optional() }).shape;
