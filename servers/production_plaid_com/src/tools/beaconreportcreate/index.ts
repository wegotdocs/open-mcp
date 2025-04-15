import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "beaconreportcreate",
  "toolDescription": "Create a Beacon Report",
  "baseUrl": "https://production.plaid.com",
  "path": "/beacon/report/create",
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
      "beacon_user_id": "beacon_user_id",
      "type": "type",
      "fraud_date": "fraud_date",
      "fraud_amount": "fraud_amount",
      "client_id": "client_id",
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool