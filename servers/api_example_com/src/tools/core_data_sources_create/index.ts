import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "core_data_sources_create",
  "toolDescription": "Post a list of data source objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/core/data-sources/",
  "method": "post",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "type": "type",
      "source_url": "source_url",
      "enabled": "enabled",
      "description": "description",
      "sync_interval": "sync_interval",
      "parameters": "parameters",
      "ignore_rules": "ignore_rules",
      "comments": "comments",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool