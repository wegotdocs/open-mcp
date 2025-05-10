import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "partnercustomercreate",
  "toolDescription": "Creates a new end customer for a Plaid reseller.",
  "baseUrl": "https://production.plaid.com",
  "path": "/partner/customer/create",
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
      "company_name": "company_name",
      "is_diligence_attested": "is_diligence_attested",
      "products": "products",
      "create_link_customization": "create_link_customization",
      "logo": "logo",
      "legal_entity_name": "legal_entity_name",
      "website": "website",
      "application_name": "application_name",
      "technical_contact": "technical_contact",
      "billing_contact": "billing_contact",
      "customer_support_info": "customer_support_info",
      "address": "address",
      "is_bank_addendum_completed": "is_bank_addendum_completed",
      "assets_under_management": "assets_under_management",
      "redirect_uris": "redirect_uris",
      "registration_number": "registration_number"
    }
  },
  inputParamsSchema
}

export default tool