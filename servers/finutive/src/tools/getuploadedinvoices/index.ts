import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuploadedinvoices",
  "toolDescription": "Get ticket list",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/tickets",
  "method": "get",
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
    "query": {
      "query": "query",
      "type": "type",
      "ticket_type": "ticket_type",
      "stakeholder": "stakeholder",
      "status": "status",
      "status_out": "status_out",
      "uploaded_start_date": "uploaded_start_date",
      "uploaded_end_date": "uploaded_end_date",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_registration_date": "start_registration_date",
      "end_registration_date": "end_registration_date",
      "order_column": "order_column",
      "order_dir": "order_dir",
      "amount_min": "amount_min",
      "amount_max": "amount_max",
      "invoice_recurrence": "invoice_recurrence",
      "invoice_status": "invoice_status",
      "invoice_type": "invoice_type",
      "expense_accounts": "expense_accounts",
      "line_activities": "line_activities",
      "taxes": "taxes",
      "irpf": "irpf",
      "tax_regime": "tax_regime",
      "payment_status": "payment_status",
      "payment_status_out": "payment_status_out",
      "serie": "serie",
      "serie_out": "serie_out",
      "product": "product",
      "tag": "tag",
      "size": "size",
      "offset": "offset",
      "app_type_platform": "app_type_platform",
      "review_tickets_not_processed": "review_tickets_not_processed",
      "select_all": "select_all",
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool