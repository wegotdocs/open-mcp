import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdateinvoicetemplate",
  "toolDescription": "Create or update an invoice template",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/templates",
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
      "template_id": "template_id",
      "name": "name",
      "stakeholder_id": "stakeholder_id",
      "payment_type": "payment_type",
      "bank_account_invoice_id": "bank_account_invoice_id",
      "language": "language",
      "currency": "currency",
      "has_irpf": "has_irpf",
      "irpf_id": "irpf_id",
      "description": "description",
      "activity_type": "activity_type",
      "price_definition": "price_definition",
      "products_data": "products_data",
      "expense_account": "expense_account",
      "activity_line": "activity_line",
      "taxes_name": "taxes_name",
      "tax_regime": "tax_regime",
      "pdf_template": "pdf_template",
      "mail_template": "mail_template",
      "enable_mail_template": "enable_mail_template",
      "serie": "serie",
      "type": "type",
      "valid_vats": "valid_vats"
    }
  },
  inputParamsSchema
}

export default tool