import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getactivities",
  "toolDescription": "List activities",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/activities",
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
      "class": "class",
      "before": "before",
      "after": "after",
      "olderThan": "olderThan",
      "newerThan": "newerThan",
      "type": "type",
      "status": "status",
      "user": "user",
      "seriesUid": "seriesUid",
      "df": "df",
      "pageSize": "pageSize",
      "lang": "lang",
      "tz": "tz",
      "sourceConfigUid": "sourceConfigUid"
    }
  },
  inputParamsSchema
}

export default tool