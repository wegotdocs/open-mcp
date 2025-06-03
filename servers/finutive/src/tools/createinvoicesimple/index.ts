import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createinvoicesimple",
  "toolDescription": "Create or update a simple invoice",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/invoice_simple/{invoiceId}",
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
      "invoiceId": "invoiceId"
    },
    "body": {
      "stakeholder_name": "stakeholder_name",
      "stakeholder_id": "stakeholder_id",
      "date": "date",
      "total_vat": "total_vat",
      "total_amount": "total_amount",
      "type": "type",
      "accounting_account": "accounting_account",
      "reference": "reference"
    }
  },
  inputParamsSchema
}

export default tool