import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cracheckreportcreate",
  "toolDescription": "Create a Consumer Report",
  "baseUrl": "https://production.plaid.com",
  "path": "/cra/check_report/create",
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
      "user_token": "user_token",
      "webhook": "webhook",
      "days_requested": "days_requested",
      "days_required": "days_required",
      "client_report_id": "client_report_id",
      "products": "products",
      "base_report": "base_report",
      "cashflow_insights": "cashflow_insights",
      "partner_insights": "partner_insights",
      "consumer_report_permissible_purpose": "consumer_report_permissible_purpose"
    }
  },
  inputParamsSchema
}

export default tool