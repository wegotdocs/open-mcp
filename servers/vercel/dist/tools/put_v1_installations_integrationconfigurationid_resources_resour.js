import { z } from "zod";
export const toolName = `put_v1_installations_integrationconfigurationid_resources_resour`;
export const toolDescription = `Push data into a user-provided Edge Config`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config`;
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
        "data"
    ]
};
export const flatMap = {};
export const inputParams = {
    "integrationConfigurationId": z.string(),
    "resourceId": z.string(),
    "data": z.record(z.any())
};
