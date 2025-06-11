import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelateditemsforhostentity",
  "toolDescription": "List host entity related items by scope",
  "baseUrl": "https://api.example.com",
  "path": "/v2/related-items/with-entity/{entityType}/{entityId}",
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
    },
    "query": {
      "scope": "scope"
    }
  },
  inputParamsSchema
}

export default tool