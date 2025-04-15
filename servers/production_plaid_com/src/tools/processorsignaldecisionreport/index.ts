import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "processorsignaldecisionreport",
  "toolDescription": "Report whether you initiated an ACH transaction",
  "baseUrl": "https://production.plaid.com",
  "path": "/processor/signal/decision/report",
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
      "processor_token": "processor_token",
      "client_transaction_id": "client_transaction_id",
      "initiated": "initiated",
      "days_funds_on_hold": "days_funds_on_hold",
      "decision_outcome": "decision_outcome",
      "payment_method": "payment_method",
      "amount_instantly_available": "amount_instantly_available"
    }
  },
  inputParamsSchema
}

export default tool