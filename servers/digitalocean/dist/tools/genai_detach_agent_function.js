import { z } from "zod";
export const toolName = `genai_detach_agent_function`;
export const toolDescription = `Delete Function Route for an Agent`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`;
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
        "function_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "agent_uuid": z.string().describe("The id of the agent the function route belongs to."), "function_uuid": z.string().describe("The function route to be destroyed. This does not destroy the function itself.") }).shape;
