import { z } from "zod";
export const toolName = `genai_update_agent_deployment_visibility`;
export const toolDescription = `Update Agent Status`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents/{uuid}/deployment_visibility`;
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
        "uuid"
    ],
    "cookie": [],
    "body": [
        "b_uuid",
        "visibility"
    ]
};
export const flatMap = {
    "b_uuid": "uuid"
};
export const inputParams = {
    "uuid": z.string().describe("Unique id"),
    "b_uuid": z.string().describe("Unique id").optional(),
    "visibility": z.enum(["VISIBILITY_UNKNOWN", "VISIBILITY_DISABLED", "VISIBILITY_PLAYGROUND", "VISIBILITY_PUBLIC", "VISIBILITY_PRIVATE"]).describe("- VISIBILITY_UNKNOWN: The status of the deployment is unknown\n - VISIBILITY_DISABLED: The deployment is disabled and will no longer service requests\n - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state\n - VISIBILITY_PUBLIC: The deployment is public and will service requests from the public internet\n - VISIBILITY_PRIVATE: The deployment is private and will only service requests from other agents, or through API keys").optional()
};
