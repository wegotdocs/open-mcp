import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendmediamessage",
  "toolDescription": "📎 Send media message",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/messages/media/{MediaMessageType}",
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
      "MediaMessageType": "MediaMessageType"
    },
    "query": {
      "SendParams": "SendParams"
    },
    "body": {
      "no_encode": "no_encode",
      "media": "media"
    }
  },
  inputParamsSchema
}

export default tool