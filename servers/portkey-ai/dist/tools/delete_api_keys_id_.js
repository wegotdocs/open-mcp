import { z } from "zod";
export const toolName = `delete_api_keys_id_`;
export const toolDescription = `Remove a Api Key`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/api-keys/{id}`;
export const method = `delete`;
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
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().uuid() }).shape;
