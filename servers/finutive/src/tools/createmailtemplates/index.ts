import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmailtemplates",
  "toolDescription": "Create mail template",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/mail_templates",
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
      "id": "id",
      "business_id": "business_id",
      "name": "name",
      "subject": "subject",
      "content": "content",
      "base_color": "base_color",
      "text_color": "text_color",
      "show_payment_type": "show_payment_type",
      "show_signature": "show_signature",
      "editable": "editable",
      "deleted": "deleted"
    }
  },
  inputParamsSchema
}

export default tool