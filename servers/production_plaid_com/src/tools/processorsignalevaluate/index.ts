import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "processorsignalevaluate",
  "toolDescription": "Evaluate a planned ACH transaction",
  "baseUrl": "https://production.plaid.com",
  "path": "/processor/signal/evaluate",
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
      "amount": "amount",
      "user_present": "user_present",
      "client_user_id": "client_user_id",
      "is_recurring": "is_recurring",
      "default_payment_method": "default_payment_method",
      "user": "user",
      "device": "device",
      "ruleset_key": "ruleset_key"
    }
  },
  inputParamsSchema
}

export default tool