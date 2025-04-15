import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfereventlist",
  "toolDescription": "List transfer events",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/event/list",
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
      "transfer_id": "transfer_id",
      "account_id": "account_id",
      "transfer_type": "transfer_type",
      "event_types": "event_types",
      "sweep_id": "sweep_id",
      "count": "count",
      "offset": "offset",
      "originator_client_id": "originator_client_id",
      "funding_account_id": "funding_account_id"
    }
  },
  inputParamsSchema
}

export default tool