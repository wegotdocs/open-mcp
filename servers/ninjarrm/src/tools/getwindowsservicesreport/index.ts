import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwindowsservicesreport",
  "toolDescription": "Windows services report",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/queries/windows-services",
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
      "name": "name",
      "state": "state",
      "cursor": "cursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool