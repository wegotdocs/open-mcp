import { z } from "zod";
export const toolName = `genai_list_agents_by_openai_key`;
export const toolDescription = `List agents by OpenAI key`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/openai/keys/{uuid}/agents`;
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
    "path": [
        "uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "uuid": z.string().describe("Unique ID of OpenAI key"),
    "page": z.number().int().describe("Page number.").optional(),
    "per_page": z.number().int().describe("Items per page.").optional()
};
