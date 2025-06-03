import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendinvoicestosage",
  "toolDescription": "Send invoices to Sage",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{businessId}/invoices/sage",
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
      "invoice_ids": "invoice_ids",
      "force": "force",
      "complement": "complement"
    }
  },
  inputParamsSchema
}

export default tool