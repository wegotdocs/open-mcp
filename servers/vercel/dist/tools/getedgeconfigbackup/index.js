export { inputParams } from "./schema/root.js";
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
