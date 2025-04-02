import { z } from "zod";
export const toolName = `genai_list_agent_api_keys`;
export const toolDescription = `List Agent API Keys`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{agent_uuid}/api_keys`;
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
        "agent_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "agent_uuid": z.string().describe("Agent id"), "page": z.number().int().describe("Page number.").optional(), "per_page": z.number().int().describe("Items per page.").optional() }).shape;
