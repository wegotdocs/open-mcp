import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transferauthorizationcreate",
  "toolDescription": "Create a transfer authorization",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/authorization/create",
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
      "funding_account_id": "funding_account_id",
      "ledger_id": "ledger_id",
      "payment_profile_token": "payment_profile_token",
      "type": "type",
      "network": "network",
      "amount": "amount",
      "ach_class": "ach_class",
      "wire_details": "wire_details",
      "user": "user",
      "device": "device",
      "iso_currency_code": "iso_currency_code",
      "idempotency_key": "idempotency_key",
      "user_present": "user_present",
      "with_guarantee": "with_guarantee",
      "beacon_session_id": "beacon_session_id",
      "originator_client_id": "originator_client_id",
      "test_clock_id": "test_clock_id",
      "ruleset_key": "ruleset_key"
    }
  },
  inputParamsSchema
}

export default tool