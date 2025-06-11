import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlastloggedonusersreport",
  "toolDescription": "Last logged-on user report",
  "baseUrl": "https://api.example.com",
  "path": "/v2/queries/logged-on-users",
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
      "cursor": "cursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool