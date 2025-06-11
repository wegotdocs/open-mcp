import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getticketlogentriesbyticketid",
  "toolDescription": "List ticket log entries",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/ticketing/ticket/{ticketId}/log-entry",
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
      "ticketId": "ticketId"
    },
    "query": {
      "type": "type",
      "createTime": "createTime",
      "anchorId": "anchorId",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool