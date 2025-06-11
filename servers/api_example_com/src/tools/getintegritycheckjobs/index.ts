import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getintegritycheckjobs",
  "toolDescription": "Integrity check jobs.",
  "baseUrl": "https://api.example.com",
  "path": "/v2/backup/integrity-check-jobs",
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
      "ddf": "ddf",
      "sf": "sf",
      "ptf": "ptf",
      "stf": "stf",
      "include": "include",
      "cursor": "cursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool