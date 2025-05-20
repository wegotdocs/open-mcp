import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_table_configs_create",
  "toolDescription": "Post a list of table config objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/table-configs/",
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
      "object_type": "object_type",
      "table": "table",
      "name": "name",
      "description": "description",
      "user": "user",
      "weight": "weight",
      "enabled": "enabled",
      "shared": "shared",
      "columns": "columns",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool