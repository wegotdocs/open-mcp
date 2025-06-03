import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteinvoice",
  "toolDescription": "Delete invoice",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/{invoiceId}/delete",
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
      "businessId": "businessId",
      "invoiceId": "invoiceId"
    },
    "body": {
      "invoice_id": "invoice_id",
      "recurrence_delete_option": "recurrence_delete_option"
    }
  },
  inputParamsSchema
}

export default tool