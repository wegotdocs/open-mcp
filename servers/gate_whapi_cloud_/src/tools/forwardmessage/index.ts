import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "forwardmessage",
  "toolDescription": "↪ Forward message",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/messages/{MessageID}",
  "method": "post",
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
      "MessageID": "MessageID"
    },
    "body": {
      "to": "to",
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool