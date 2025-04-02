import { z } from "zod";
export const toolName = `get_logs_exports_exportid_download`;
export const toolDescription = `Download log export`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/logs/exports/{exportId}/download`;
export const method = `get`;
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
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "exportId": z.string() }).shape;
