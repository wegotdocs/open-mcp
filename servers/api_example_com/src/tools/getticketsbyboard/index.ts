import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getticketsbyboard",
  "toolDescription": "List of tickets for board",
  "baseUrl": "https://api.example.com",
  "path": "/v2/ticketing/trigger/board/{boardId}/run",
  "method": "post",
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
      "boardId": "boardId"
    },
    "body": {
      "sortBy": "sortBy",
      "filters": "filters",
      "pageSize": "pageSize",
      "searchCriteria": "searchCriteria",
      "includeColumns": "includeColumns",
      "lastCursorId": "lastCursorId"
    }
  },
  inputParamsSchema
}

export default tool