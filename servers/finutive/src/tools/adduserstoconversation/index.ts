import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "adduserstoconversation",
  "toolDescription": "Add users to conversation",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/communications/conversations/{conversationId}/users",
  "method": "patch",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "conversationId": "conversationId"
    },
    "body": {
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool