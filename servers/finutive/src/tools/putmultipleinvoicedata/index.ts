import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putmultipleinvoicedata",
  "toolDescription": "Create or update multiple invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/multiple",
  "method": "put",
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
      "due_date": "due_date",
      "status": "status",
      "invoice_id": "invoice_id",
      "invoice_number": "invoice_number",
      "company_name": "company_name",
      "company_cif": "company_cif",
      "company_address": "company_address",
      "company_city": "company_city",
      "company_zip": "company_zip",
      "client_id": "client_id",
      "client_name": "client_name",
      "client_cif": "client_cif",
      "client_address": "client_address",
      "products": "products",
      "issuanceDate": "issuanceDate",
      "description": "description",
      "payment_method": "payment_method",
      "bank_account": "bank_account",
      "language": "language",
      "currency": "currency",
      "apply_irpf": "apply_irpf",
      "irpf": "irpf",
      "equivalence_surcharge": "equivalence_surcharge",
      "recurrency": "recurrency",
      "taxes_title": "taxes_title",
      "withholdings_title": "withholdings_title",
      "account_name": "account_name",
      "account_iban": "account_iban",
      "transaction_id": "transaction_id",
      "type": "type",
      "client_zip": "client_zip",
      "client_city": "client_city",
      "prefix_id": "prefix_id",
      "start_of_period": "start_of_period",
      "accounting_account": "accounting_account",
      "tax_regime": "tax_regime",
      "type_activity": "type_activity",
      "price_definition": "price_definition",
      "line_activities": "line_activities",
      "comment_sii": "comment_sii",
      "irpf_select": "irpf_select",
      "send_by_email": "send_by_email",
      "email_template_id": "email_template_id",
      "template_id": "template_id",
      "document": "document",
      "generate_document": "generate_document",
      "exchange_rate": "exchange_rate",
      "invoice_tags_ids": "invoice_tags_ids",
      "operations_by_product": "operations_by_product",
      "special_free_treatment": "special_free_treatment",
      "special_free_treatment_data": "special_free_treatment_data"
    }
  },
  inputParamsSchema
}

export default tool