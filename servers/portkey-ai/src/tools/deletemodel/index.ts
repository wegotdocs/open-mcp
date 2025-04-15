import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletemodel",
  "toolDescription": "Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/models/{model}",
  "method": "delete",
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
    "path": {
      "model": "model"
    }
  },
  inputParamsSchema
}

export default tool