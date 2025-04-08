import { z } from "zod";
export const toolName = `genai_detach_knowledge_base`;
export const toolDescription = `Detach Knowledge Base from an Agent`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`;
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
    "query": [],
    "header": [],
    "path": [
        "agent_uuid",
        "knowledge_base_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "agent_uuid": z.string().describe("Agent id"),
    "knowledge_base_uuid": z.string().describe("Knowledge base id")
};
