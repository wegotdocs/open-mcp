import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postlistinvoices",
  "toolDescription": "List invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/list",
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
      "start": "start",
      "length": "length",
      "order": "order",
      "order_dir": "order_dir",
      "status": "status",
      "status_payment": "status_payment",
      "recurrency": "recurrency",
      "query": "query",
      "type": "type",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_registration_date": "start_registration_date",
      "end_registration_date": "end_registration_date",
      "upload_start_date": "upload_start_date",
      "upload_end_date": "upload_end_date",
      "tax_regime": "tax_regime",
      "serie": "serie",
      "serie_out": "serie_out",
      "stakeholder": "stakeholder",
      "product": "product",
      "activity_line": "activity_line",
      "accounting_account": "accounting_account",
      "irpf": "irpf",
      "amount_min": "amount_min",
      "amount_max": "amount_max",
      "get_remittance_data": "get_remittance_data",
      "sage": "sage",
      "special_free_treatment": "special_free_treatment",
      "back": "back",
      "select_all": "select_all",
      "get_finutive_client_status": "get_finutive_client_status",
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool