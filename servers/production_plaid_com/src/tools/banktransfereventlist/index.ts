import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banktransfereventlist",
  "toolDescription": "List bank transfer events",
  "baseUrl": "https://production.plaid.com",
  "path": "/bank_transfer/event/list",
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
      "bank_transfer_id": "bank_transfer_id",
      "account_id": "account_id",
      "bank_transfer_type": "bank_transfer_type",
      "event_types": "event_types",
      "count": "count",
      "offset": "offset",
      "origination_account_id": "origination_account_id",
      "direction": "direction"
    }
  },
  inputParamsSchema
}

export default tool