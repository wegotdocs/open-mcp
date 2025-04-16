import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v3_command",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/command",
  "method": "post",
  "security": [
    {
      "key": "X-Api-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "commandName": "commandName",
      "message": "message",
      "body": "body",
      "priority": "priority",
      "status": "status",
      "result": "result",
      "queued": "queued",
      "started": "started",
      "ended": "ended",
      "duration": "duration",
      "exception": "exception",
      "trigger": "trigger",
      "clientUserAgent": "clientUserAgent",
      "stateChangeTime": "stateChangeTime",
      "sendUpdatesToClient": "sendUpdatesToClient",
      "updateScheduledTask": "updateScheduledTask",
      "lastExecutionTime": "lastExecutionTime"
    }
  },
  inputParamsSchema
}

export default tool