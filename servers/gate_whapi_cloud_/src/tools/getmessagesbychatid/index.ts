import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmessagesbychatid",
  "toolDescription": "Get messages by chat ID",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/messages/list/{ChatID}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "ChatID": "ChatID"
    },
    "query": {
      "count": "count",
      "offset": "offset",
      "time_from": "time_from",
      "time_to": "time_to",
      "normal_types": "normal_types",
      "author": "author",
      "from_me": "from_me",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool