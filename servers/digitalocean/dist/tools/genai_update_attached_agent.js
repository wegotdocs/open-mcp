import { z } from "zod";
export const toolName = `genai_update_attached_agent`;
export const toolDescription = `Update Agent Route for an Agent`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`;
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
        "parent_agent_uuid",
        "child_agent_uuid"
    ],
    "cookie": [],
    "body": [
        "b_child_agent_uuid",
        "if_case",
        "b_parent_agent_uuid",
        "route_name",
        "uuid"
    ]
};
export const flatMap = {
    "b_child_agent_uuid": "child_agent_uuid",
    "b_parent_agent_uuid": "parent_agent_uuid"
};
export const inputParams = z.object({ "parent_agent_uuid": z.string().describe("A unique identifier for the parent agent."), "child_agent_uuid": z.string().describe("Routed agent id"), "b_child_agent_uuid": z.string().describe("Routed agent id").optional(), "if_case": z.string().describe("Describes the case in which the child agent should be used").optional(), "b_parent_agent_uuid": z.string().describe("A unique identifier for the parent agent.").optional(), "route_name": z.string().describe("Route name").optional(), "uuid": z.string().describe("Unique id of linkage").optional() }).shape;
