import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "processemailmessage",
  "toolDescription": "Process an email message",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/communications/email",
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
      "email_id": "email_id",
      "from_email": "from_email",
      "subject": "subject",
      "body": "body",
      "attachments": "attachments",
      "conversation_id": "conversation_id",
      "tag_service": "tag_service"
    }
  },
  inputParamsSchema
}

export default tool