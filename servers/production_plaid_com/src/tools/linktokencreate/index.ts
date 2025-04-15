import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "linktokencreate",
  "toolDescription": "Create Link Token",
  "baseUrl": "https://production.plaid.com",
  "path": "/link/token/create",
  "method": "post",
  "security": [
    {
      "key": "PLAID-CLIENT-ID",
      "value": "<mcp-env-var>PLAID_CLIENT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_CLIENT_ID"
    },
    {
      "key": "PLAID-SECRET",
      "value": "<mcp-env-var>PLAID_SECRET</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_SECRET"
    },
    {
      "key": "Plaid-Version",
      "value": "<mcp-env-var>PLAID_VERSION</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_VERSION"
    }
  ],
  "paramsMap": {
    "body": {
      "client_id": "client_id",
      "secret": "secret",
      "client_name": "client_name",
      "language": "language",
      "country_codes": "country_codes",
      "user": "user",
      "products": "products",
      "required_if_supported_products": "required_if_supported_products",
      "optional_products": "optional_products",
      "additional_consented_products": "additional_consented_products",
      "webhook": "webhook",
      "access_token": "access_token",
      "access_tokens": "access_tokens",
      "link_customization_name": "link_customization_name",
      "redirect_uri": "redirect_uri",
      "android_package_name": "android_package_name",
      "institution_data": "institution_data",
      "card_switch": "card_switch",
      "account_filters": "account_filters",
      "eu_config": "eu_config",
      "institution_id": "institution_id",
      "payment_configuration": "payment_configuration",
      "payment_initiation": "payment_initiation",
      "employment": "employment",
      "income_verification": "income_verification",
      "base_report": "base_report",
      "credit_partner_insights": "credit_partner_insights",
      "cra_options": "cra_options",
      "consumer_report_permissible_purpose": "consumer_report_permissible_purpose",
      "auth": "auth",
      "transfer": "transfer",
      "update": "update",
      "identity_verification": "identity_verification",
      "statements": "statements",
      "user_token": "user_token",
      "third_party_user_token": "third_party_user_token",
      "investments": "investments",
      "investments_auth": "investments_auth",
      "hosted_link": "hosted_link",
      "transactions": "transactions",
      "cashflow_report": "cashflow_report",
      "cra_enabled": "cra_enabled",
      "identity": "identity",
      "financekit_supported": "financekit_supported",
      "enable_multi_item_link": "enable_multi_item_link"
    }
  },
  inputParamsSchema
}

export default tool