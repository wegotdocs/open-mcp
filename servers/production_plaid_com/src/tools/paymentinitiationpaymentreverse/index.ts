import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentinitiationpaymentreverse",
  "toolDescription": "Reverse an existing payment",
  "baseUrl": "https://production.plaid.com",
  "path": "/payment_initiation/payment/reverse",
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
      "payment_id": "payment_id",
      "idempotency_key": "idempotency_key",
      "reference": "reference",
      "amount": "amount",
      "counterparty_date_of_birth": "counterparty_date_of_birth",
      "counterparty_address": "counterparty_address"
    }
  },
  inputParamsSchema
}

export default tool