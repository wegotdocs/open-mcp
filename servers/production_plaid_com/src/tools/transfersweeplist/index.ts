import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfersweeplist",
  "toolDescription": "List sweeps",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/sweep/list",
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
      "start_date": "start_date",
      "end_date": "end_date",
      "count": "count",
      "offset": "offset",
      "amount": "amount",
      "status": "status",
      "originator_client_id": "originator_client_id",
      "funding_account_id": "funding_account_id",
      "transfer_id": "transfer_id",
      "trigger": "trigger"
    }
  },
  inputParamsSchema
}

export default tool