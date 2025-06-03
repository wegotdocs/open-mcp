import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putcompanydata",
  "toolDescription": "Update company data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/put_company_data",
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
      "business_id": "business_id"
    },
    "body": {
      "cif": "cif",
      "zip": "zip",
      "address": "address",
      "email": "email",
      "web": "web",
      "city": "city",
      "state": "state",
      "name": "name",
      "tel": "tel",
      "signature_hash": "signature_hash",
      "signature": "signature",
      "email_extra": "email_extra",
      "send_to_email_extra": "send_to_email_extra",
      "default_account_tax_payment": "default_account_tax_payment",
      "manager_use_accounts": "manager_use_accounts",
      "roi": "roi",
      "business_current_activity": "business_current_activity",
      "no_taxable_activity": "no_taxable_activity",
      "business_type": "business_type",
      "cnae": "cnae",
      "address_affectation": "address_affectation",
      "start_company_date": "start_company_date",
      "company_constitution_date": "company_constitution_date",
      "documents": "documents",
      "payment_taxes_not_postponed": "payment_taxes_not_postponed",
      "payment_taxes_postponed": "payment_taxes_postponed",
      "accounting_period": "accounting_period",
      "send_automatic_taxes": "send_automatic_taxes",
      "company_regimen_taxes": "company_regimen_taxes",
      "startup_certificate": "startup_certificate",
      "currency_id": "currency_id",
      "due_date": "due_date",
      "issueDate": "issueDate",
      "selected_account": "selected_account",
      "exact_percentage_petrol_deductible": "exact_percentage_petrol_deductible",
      "deductible_petrol": "deductible_petrol",
      "deductible_daily_subsistance": "deductible_daily_subsistance",
      "sage_start_period": "sage_start_period",
      "accounting_software": "accounting_software",
      "sage_type_provider": "sage_type_provider",
      "show_sample_modal": "show_sample_modal",
      "invoice_or_sample": "invoice_or_sample",
      "maximum_quantity_to_auto_process": "maximum_quantity_to_auto_process",
      "language": "language",
      "create_new_series_in_auto_process": "create_new_series_in_auto_process",
      "logo": "logo"
    }
  },
  inputParamsSchema
}

export default tool