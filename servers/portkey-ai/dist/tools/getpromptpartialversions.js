import { z } from "zod";
export const toolName = `getpromptpartialversions`;
export const toolDescription = `Get all versions of a prompt partial`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts/partials/{promptPartialId}/versions`;
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
        "promptPartialId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "promptPartialId": z.string()
};
