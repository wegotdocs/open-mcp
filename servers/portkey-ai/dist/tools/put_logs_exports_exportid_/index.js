export { inputParams } from "./schema/root.js";
export const toolName = `put_logs_exports_exportid_`;
export const toolDescription = `Update a logs export`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/logs/exports/{exportId}`;
export const method = `put`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "exportId"
    ],
    "cookie": [],
    "body": [
        "workspace_id",
        "filters",
        "requested_data"
    ]
};
export const flatMap = {};
