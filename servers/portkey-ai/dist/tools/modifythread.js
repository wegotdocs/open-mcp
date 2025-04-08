import { z } from "zod";
export const toolName = `modifythread`;
export const toolDescription = `Modifies a thread.`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/threads/{thread_id}`;
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
        "thread_id"
    ],
    "cookie": [],
    "body": [
        "tool_resources",
        "metadata"
    ]
};
export const flatMap = {};
export const inputParams = {
    "thread_id": z.string().describe("The ID of the thread to modify. Only the `metadata` can be modified."),
    "tool_resources": z.object({ "code_interpreter": z.object({ "file_ids": z.array(z.string()).max(20).describe("A list of [file](https://platform.openai.com/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.\n") }).optional(), "file_search": z.object({ "vector_store_ids": z.array(z.string()).max(1).describe("The [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.\n").optional() }).optional() }).nullable().describe("A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.\n").optional(),
    "metadata": z.record(z.any()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n").optional()
};
