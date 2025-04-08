import { z } from "zod";
export const toolName = `updatepromptversion`;
export const toolDescription = `Update a specific version of a prompt`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts/{promptId}/versions/{versionId}`;
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
        "promptId",
        "versionId"
    ],
    "cookie": [],
    "body": [
        "label_id"
    ]
};
export const flatMap = {};
export const inputParams = {
    "promptId": z.string(),
    "versionId": z.string().uuid(),
    "label_id": z.string().uuid().optional()
};
