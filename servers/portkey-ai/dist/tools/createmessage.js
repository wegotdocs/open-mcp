import { z } from "zod";
export const toolName = `createmessage`;
export const toolDescription = `Create a message.`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/threads/{thread_id}/messages`;
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
        "role",
        "content",
        "attachments",
        "metadata"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "thread_id": z.string().describe("The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) to create a message for."), "role": z.enum(["user", "assistant"]).describe("The role of the entity that is creating the message. Allowed values include:\n- `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.\n- `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.\n"), "content": z.string().describe("The text contents of the message."), "attachments": z.array(z.object({ "file_id": z.string().describe("The ID of the file to attach to the message.").optional(), "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: `code_interpreter`") })).describe("The tools to add this file to.").optional() })).nullable().describe("A list of files attached to the message, and the tools they should be added to.").optional(), "metadata": z.record(z.any()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n").optional() }).shape;
