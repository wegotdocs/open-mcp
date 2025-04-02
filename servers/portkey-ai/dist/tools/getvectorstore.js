import { z } from "zod";
export const toolName = `getvectorstore`;
export const toolDescription = `Retrieves a vector store.`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/vector_stores/{vector_store_id}`;
export const method = `get`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    },
    {
        "key": "x-portkey-virtual-key",
        "value": "<mcp-env-var>X_PORTKEY_VIRTUAL_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_VIRTUAL_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-virtual-key"
    },
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    },
    {
        "key": "x-portkey-provider",
        "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_PROVIDER",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-provider"
    },
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    },
    {
        "key": "x-portkey-config",
        "value": "<mcp-env-var>X_PORTKEY_CONFIG</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_CONFIG",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-config"
    },
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    },
    {
        "key": "x-portkey-provider",
        "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_PROVIDER",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-provider"
    },
    {
        "key": "x-portkey-custom-host",
        "value": "<mcp-env-var>X_PORTKEY_CUSTOM_HOST</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_CUSTOM_HOST",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-custom-host"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "vector_store_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "vector_store_id": z.string().describe("The ID of the vector store to retrieve.") }).shape;
