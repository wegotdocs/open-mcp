import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banktransfercreate",
  "toolDescription": "Create a bank transfer",
  "baseUrl": "https://production.plaid.com",
  "path": "/bank_transfer/create",
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
      "idempotency_key": "idempotency_key",
      "access_token": "access_token",
      "account_id": "account_id",
      "type": "type",
      "network": "network",
      "amount": "amount",
      "iso_currency_code": "iso_currency_code",
      "description": "description",
      "ach_class": "ach_class",
      "user": "user",
      "custom_tag": "custom_tag",
      "metadata": "metadata",
      "origination_account_id": "origination_account_id"
    }
  },
  inputParamsSchema
}

export default tool