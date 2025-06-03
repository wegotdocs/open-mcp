import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unsaveconversation",
  "toolDescription": "Unsave a conversation",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/communications/conversations/{conversation_id}/save",
  "method": "delete",
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
      "conversation_id": "conversation_id"
    }
  },
  inputParamsSchema
}

export default tool