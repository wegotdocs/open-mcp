import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transferrecurringcreate",
  "toolDescription": "Create a recurring transfer",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/recurring/create",
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
      "idempotency_key": "idempotency_key",
      "account_id": "account_id",
      "type": "type",
      "network": "network",
      "ach_class": "ach_class",
      "amount": "amount",
      "user_present": "user_present",
      "description": "description",
      "test_clock_id": "test_clock_id",
      "schedule": "schedule",
      "user": "user",
      "device": "device"
    }
  },
  inputParamsSchema
}

export default tool