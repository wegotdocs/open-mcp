import { z } from "zod";
export const toolName = `create_event`;
export const toolDescription = `Create Event`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/events`;
export const method = `post`;
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
        "integrationConfigurationId"
    ],
    "cookie": [],
    "body": [
        "event"
    ]
};
export const flatMap = {};
export const inputParams = {
    "integrationConfigurationId": z.string(),
    "event": z.object({ "type": z.literal("installation.updated"), "billingPlanId": z.string().describe("The installation-level billing plan ID").optional() }).strict()
};
