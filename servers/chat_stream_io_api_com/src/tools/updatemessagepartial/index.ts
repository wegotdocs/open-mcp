import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatemessagepartial",
  "toolDescription": "Partially message update",
  "baseUrl": "https://chat.stream-io-api.com",
  "path": "/messages/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    },
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "API_KEY"
    },
    {
      "key": "Stream-Auth-Type",
      "value": "<mcp-env-var>STREAM_AUTH_TYPE</mcp-env-var>",
      "in": "header",
      "envVarName": "STREAM_AUTH_TYPE"
    },
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "API_KEY"
    },
    {
      "key": "Stream-Auth-Type",
      "value": "<mcp-env-var>STREAM_AUTH_TYPE</mcp-env-var>",
      "in": "header",
      "envVarName": "STREAM_AUTH_TYPE"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "set": "set",
      "skip_enrich_url": "skip_enrich_url",
      "unset": "unset",
      "user": "user",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool