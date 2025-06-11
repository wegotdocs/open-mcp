import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpendingfailedrejectedsoftwarepatches",
  "toolDescription": "Pending, Failed and Rejected Software patches report",
  "baseUrl": "https://api.example.com",
  "path": "/v2/queries/software-patches",
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
      "df": "df",
      "ts": "ts",
      "status": "status",
      "productIdentifier": "productIdentifier",
      "type": "type",
      "impact": "impact",
      "cursor": "cursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool