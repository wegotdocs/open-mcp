export { inputParams } from "./schema/root.js";
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
