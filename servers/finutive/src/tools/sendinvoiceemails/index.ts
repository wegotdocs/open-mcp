import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendinvoiceemails",
  "toolDescription": "Send invoice emails",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/email",
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
      "businessId": "businessId"
    },
    "body": {
      "business_id": "business_id",
      "invoices": "invoices",
      "subject": "subject",
      "content": "content",
      "addressees": "addressees",
      "template_id": "template_id",
      "signature": "signature"
    }
  },
  inputParamsSchema
}

export default tool