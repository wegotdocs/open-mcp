import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patchchat",
  "toolDescription": "⚙️Chat Settings Management: Pin, Mute, Read, Disappearing.",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/chats/{ChatID}",
  "method": "patch",
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
    "body": {
      "pin": "pin",
      "mute_until": "mute_until",
      "mark_unread": "mark_unread",
      "ephemeral": "ephemeral"
    }
  },
  inputParamsSchema
}

export default tool