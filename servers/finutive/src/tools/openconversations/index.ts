import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "openconversations",
  "toolDescription": "Reopen conversations",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/communications/conversations/open",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "conversation_ids": "conversation_ids"
    }
  },
  inputParamsSchema
}

export default tool