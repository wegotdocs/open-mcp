import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transferledgerwithdraw",
  "toolDescription": "Withdraw funds from a Plaid Ledger balance",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/ledger/withdraw",
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
      "originator_client_id": "originator_client_id",
      "funding_account_id": "funding_account_id",
      "ledger_id": "ledger_id",
      "amount": "amount",
      "description": "description",
      "idempotency_key": "idempotency_key",
      "network": "network"
    }
  },
  inputParamsSchema
}

export default tool