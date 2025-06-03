import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendmessage",
  "toolDescription": "Send a new message",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/communications/message",
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
      "business_id": "business_id"
    },
    "body": {
      "title": "title",
      "message": "message",
      "responsible": "responsible",
      "destinataries": "destinataries",
      "element_type": "element_type",
      "element_id": "element_id",
      "attachments": "attachments",
      "conversation_id": "conversation_id",
      "is_public": "is_public",
      "is_closed": "is_closed",
      "users_cc": "users_cc"
    }
  },
  inputParamsSchema
}

export default tool