import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinessesonboardingidlist",
  "toolDescription": "Get IDs of businesses for onboarding",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/onboarding/idList",
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
    "query": {
      "search_string": "search_string",
      "business_type": "business_type",
      "order_direction": "order_direction",
      "startup_certificate": "startup_certificate",
      "invite_start_date": "invite_start_date",
      "invite_end_date": "invite_end_date",
      "services": "services",
      "deal_labels_id": "deal_labels_id",
      "census": "census",
      "opportunity_start_date": "opportunity_start_date",
      "opportunity_end_date": "opportunity_end_date",
      "paid_start_date": "paid_start_date",
      "paid_end_date": "paid_end_date",
      "discarded_start_date": "discarded_start_date",
      "discarded_end_date": "discarded_end_date",
      "updated_start_date": "updated_start_date",
      "updated_end_date": "updated_end_date",
      "recurrent_start_date": "recurrent_start_date",
      "recurrent_end_date": "recurrent_end_date",
      "products": "products",
      "products_out_id": "products_out_id",
      "services_out_id": "services_out_id",
      "not_blocked": "not_blocked",
      "with_products": "with_products",
      "has_assigned_client": "has_assigned_client",
      "with_recurrency": "with_recurrency",
      "with_bank_account": "with_bank_account",
      "with_fiscal_documents": "with_fiscal_documents",
      "gocardless_active": "gocardless_active",
      "sage_active": "sage_active",
      "zip_code": "zip_code",
      "min_invoices_last_6_months_incomes": "min_invoices_last_6_months_incomes",
      "max_invoices_last_6_months_incomes": "max_invoices_last_6_months_incomes",
      "min_transactions_last_6_months_incomes": "min_transactions_last_6_months_incomes",
      "max_transactions_last_6_months_incomes": "max_transactions_last_6_months_incomes",
      "min_annual_budget": "min_annual_budget",
      "max_annual_budget": "max_annual_budget",
      "special_free_treatment": "special_free_treatment",
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool