import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "discardmassiveinvoices",
  "toolDescription": "Discard a list of invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/discard_massive",
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
      "invoice_id": "invoice_id",
      "reason": "reason",
      "discard_text": "discard_text",
      "dont_send_email": "dont_send_email"
    }
  },
  inputParamsSchema
}

export default tool