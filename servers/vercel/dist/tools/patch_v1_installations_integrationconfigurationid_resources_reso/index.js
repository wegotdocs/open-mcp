export { inputParams } from "./schema/root.js";
export const toolName = `patch_v1_installations_integrationconfigurationid_resources_reso`;
export const toolDescription = `Patch an existing experimentation item`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}`;
export const method = `patch`;
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
        "resourceId",
        "itemId"
    ],
    "cookie": [],
    "body": [
        "slug",
        "origin",
        "name",
        "category",
        "description",
        "isArchived",
        "createdAt",
        "updatedAt"
    ]
};
export const flatMap = {};
