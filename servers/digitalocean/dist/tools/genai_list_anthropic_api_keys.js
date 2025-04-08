import { z } from "zod";
export const toolName = `genai_list_anthropic_api_keys`;
export const toolDescription = `List Anthropic API Keys`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/anthropic/keys`;
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
        "page",
        "per_page"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "page": z.number().int().describe("Page number.").optional(),
    "per_page": z.number().int().describe("Items per page.").optional()
};
