import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscopedcustomfieldsreport",
  "toolDescription": "Scoped custom fields report",
  "baseUrl": "https://api.example.com",
  "path": "/v2/queries/scoped-custom-fields",
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
    "query": {
      "cursor": "cursor",
      "pageSize": "pageSize",
      "updatedAfter": "updatedAfter",
      "fields": "fields",
      "scopes": "scopes",
      "showSecureValues": "showSecureValues"
    }
  },
  inputParamsSchema
}

export default tool