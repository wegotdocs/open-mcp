import { z } from "zod";
export const toolName = `createvectorstorefile`;
export const toolDescription = `Create a vector store file by attaching a [File](https://platform.openai.com/docs/api-reference/files) to a [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object).`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/vector_stores/{vector_store_id}/files`;
export const method = `post`;
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
    "body": [
        "file_id",
        "chunking_strategy"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "vector_store_id": z.string().describe("The ID of the vector store for which to create a File.\n"), "file_id": z.string().describe("A [File](https://platform.openai.com/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files."), "chunking_strategy": z.record(z.any()).and(z.object({ "type": z.literal("auto").describe("Always `auto`.") }).strict().describe("The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.")).describe("The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.").optional() }).shape;
