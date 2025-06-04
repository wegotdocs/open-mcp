import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "archivechat",
  "toolDescription": "🗄 Archive/Unarchive chat",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/chats/{ChatID}",
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
      "ChatID": "ChatID"
    },
    "body": {
      "archive": "archive"
    }
  },
  inputParamsSchema
}

export default tool