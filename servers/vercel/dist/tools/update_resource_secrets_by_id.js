import { z } from "zod";
export const toolName = `update_resource_secrets_by_id`;
export const toolDescription = `Update Resource Secrets`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/secrets`;
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
        "integrationConfigurationId",
        "resourceId"
    ],
    "cookie": [],
    "body": [
        "secrets",
        "partial"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "integrationConfigurationId": z.string(), "resourceId": z.string(), "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()), "partial": z.boolean().describe("If true, will only update the provided secrets").optional() }).shape;
