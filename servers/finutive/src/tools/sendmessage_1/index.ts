import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendmessage_1",
  "toolDescription": "Send admin message",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/communications/message",
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
      "title": "title",
      "message": "message",
      "responsible": "responsible",
      "destinataries": "destinataries",
      "attachments": "attachments",
      "is_closed": "is_closed"
    }
  },
  inputParamsSchema
}

export default tool