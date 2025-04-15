import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sandboxtransfersimulate",
  "toolDescription": "Simulate a transfer event in Sandbox",
  "baseUrl": "https://production.plaid.com",
  "path": "/sandbox/transfer/simulate",
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
      "transfer_id": "transfer_id",
      "test_clock_id": "test_clock_id",
      "event_type": "event_type",
      "failure_reason": "failure_reason",
      "webhook": "webhook"
    }
  },
  inputParamsSchema
}

export default tool