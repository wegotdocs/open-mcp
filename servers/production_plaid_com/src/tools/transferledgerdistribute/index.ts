import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transferledgerdistribute",
  "toolDescription": "Move available balance between the ledgers of the platform and one of its originators",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/ledger/distribute",
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
      "from_ledger_id": "from_ledger_id",
      "to_ledger_id": "to_ledger_id",
      "amount": "amount",
      "idempotency_key": "idempotency_key",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool