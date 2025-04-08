import { z } from "zod";
export const toolName = `getedgeconfigbackup`;
export const toolDescription = `Get Edge Config backup`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}`;
export const method = `get`;
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
    "query": [
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "edgeConfigId",
        "edgeConfigBackupVersionId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "edgeConfigId": z.string(),
    "edgeConfigBackupVersionId": z.string(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
