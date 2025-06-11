import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnodeattributesignedurls",
  "toolDescription": "Get custom field signed urls",
  "baseUrl": "https://api.example.com",
  "path": "/v2/custom-fields/entity-type/{entityType}/{entityId}/signed-urls",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "entityType": "entityType",
      "entityId": "entityId"
    }
  },
  inputParamsSchema
}

export default tool