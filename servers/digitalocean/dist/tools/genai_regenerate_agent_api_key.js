import { z } from "zod";
export const toolName = `genai_regenerate_agent_api_key`;
export const toolDescription = `Regenerate API Key for an Agent`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate`;
export const method = `put`;
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
        "agent_uuid",
        "api_key_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "agent_uuid": z.string().describe("Agent id"), "api_key_uuid": z.string().describe("Api key id") }).shape;
