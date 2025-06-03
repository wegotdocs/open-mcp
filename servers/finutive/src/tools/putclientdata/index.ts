import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putclientdata",
  "toolDescription": "Put client data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/stakeholders",
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
      "id": "id",
      "cif": "cif",
      "zip": "zip",
      "address": "address",
      "email": "email",
      "city": "city",
      "business_name": "business_name",
      "tel": "tel",
      "type": "type",
      "category": "category",
      "state": "state",
      "eu_country": "eu_country",
      "roi": "roi",
      "image_id": "image_id",
      "image_url": "image_url",
      "accounting_account": "accounting_account",
      "expense_account": "expense_account",
      "line_activity": "line_activity",
      "irpf": "irpf",
      "tax_regime": "tax_regime",
      "email_extra": "email_extra",
      "iban": "iban",
      "sepa_file": "sepa_file",
      "expense_account_client": "expense_account_client",
      "expense_account_provider": "expense_account_provider",
      "include_country": "include_country",
      "activity_type": "activity_type",
      "allow_provider_auto_processing": "allow_provider_auto_processing",
      "provider_max_quantity_auto_processing": "provider_max_quantity_auto_processing",
      "provider_default_currency_auto_processing": "provider_default_currency_auto_processing"
    }
  },
  inputParamsSchema
}

export default tool