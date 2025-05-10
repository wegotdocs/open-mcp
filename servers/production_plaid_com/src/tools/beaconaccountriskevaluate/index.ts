import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "beaconaccountriskevaluate",
  "toolDescription": "Evaluate risk of a bank account",
  "baseUrl": "https://production.plaid.com",
  "path": "/beacon/account_risk/v1/evaluate",
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
      "options": "options",
      "client_user_id": "client_user_id",
      "client_evaluation_id": "client_evaluation_id",
      "evaluation_reason": "evaluation_reason",
      "device": "device",
      "evaluate_time": "evaluate_time"
    }
  },
  inputParamsSchema
}

export default tool