import { z } from "zod";
export const toolName = `updatepromptdefault`;
export const toolDescription = `Set a version as the default for a prompt`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts/{promptId}/makedefault`;
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
        "promptId"
    ],
    "cookie": [],
    "body": [
        "version"
    ]
};
export const flatMap = {};
export const inputParams = {
    "promptId": z.string(),
    "version": z.number().describe("Version Number to set as default")
};
