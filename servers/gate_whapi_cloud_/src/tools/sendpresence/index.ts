import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendpresence",
  "toolDescription": "Send typing or recording presence",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/presences/{EntryID}",
  "method": "put",
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
      "EntryID": "EntryID"
    },
    "body": {
      "presence": "presence",
      "delay": "delay"
    }
  },
  inputParamsSchema
}

export default tool