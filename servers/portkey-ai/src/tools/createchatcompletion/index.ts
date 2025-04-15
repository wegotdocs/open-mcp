import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createchatcompletion",
  "toolDescription": "Chat",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/chat/completions",
  "method": "post",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    },
    {
      "key": "x-portkey-virtual-key",
      "value": "<mcp-env-var>X_PORTKEY_VIRTUAL_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_VIRTUAL_KEY"
    },
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "x-portkey-provider",
      "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_PROVIDER"
    },
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    },
    {
      "key": "x-portkey-config",
      "value": "<mcp-env-var>X_PORTKEY_CONFIG</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_CONFIG"
    },
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "x-portkey-provider",
      "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_PROVIDER"
    },
    {
      "key": "x-portkey-custom-host",
      "value": "<mcp-env-var>X_PORTKEY_CUSTOM_HOST</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_CUSTOM_HOST"
    }
  ],
  "paramsMap": {
    "body": {
      "messages": "messages",
      "model": "model",
      "frequency_penalty": "frequency_penalty",
      "logit_bias": "logit_bias",
      "logprobs": "logprobs",
      "top_logprobs": "top_logprobs",
      "max_tokens": "max_tokens",
      "n": "n",
      "presence_penalty": "presence_penalty",
      "response_format": "response_format",
      "seed": "seed",
      "stop": "stop",
      "stream": "stream",
      "stream_options": "stream_options",
      "thinking": "thinking",
      "temperature": "temperature",
      "top_p": "top_p",
      "tools": "tools",
      "tool_choice": "tool_choice",
      "parallel_tool_calls": "parallel_tool_calls",
      "user": "user"
    },
    "header": {
      "x-portkey-trace-id": "x-portkey-trace-id",
      "x-portkey-span-id": "x-portkey-span-id",
      "x-portkey-parent-span-id": "x-portkey-parent-span-id",
      "x-portkey-span-name": "x-portkey-span-name",
      "x-portkey-metadata": "x-portkey-metadata",
      "x-portkey-cache-namespace": "x-portkey-cache-namespace",
      "x-portkey-cache-force-refresh": "x-portkey-cache-force-refresh"
    }
  },
  inputParamsSchema
}

export default tool