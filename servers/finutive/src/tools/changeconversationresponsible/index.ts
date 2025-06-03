import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "changeconversationresponsible",
  "toolDescription": "Change conversation responsible",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/communications/conversations/{conversation_id}/responsible/{responsible_id}",
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
    "path": {
      "business_id": "business_id",
      "conversation_id": "conversation_id",
      "responsible_id": "responsible_id"
    }
  },
  inputParamsSchema
}

export default tool