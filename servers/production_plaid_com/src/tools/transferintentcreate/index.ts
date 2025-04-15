import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transferintentcreate",
  "toolDescription": "Create a transfer intent object to invoke the Transfer UI",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/intent/create",
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
      "account_id": "account_id",
      "funding_account_id": "funding_account_id",
      "mode": "mode",
      "network": "network",
      "amount": "amount",
      "description": "description",
      "ach_class": "ach_class",
      "user": "user",
      "metadata": "metadata",
      "iso_currency_code": "iso_currency_code",
      "require_guarantee": "require_guarantee"
    }
  },
  inputParamsSchema
}

export default tool