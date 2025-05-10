import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfercreate",
  "toolDescription": "Create a transfer",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/create",
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
      "access_token": "access_token",
      "account_id": "account_id",
      "authorization_id": "authorization_id",
      "amount": "amount",
      "description": "description",
      "metadata": "metadata",
      "test_clock_id": "test_clock_id",
      "facilitator_fee": "facilitator_fee"
    }
  },
  inputParamsSchema
}

export default tool