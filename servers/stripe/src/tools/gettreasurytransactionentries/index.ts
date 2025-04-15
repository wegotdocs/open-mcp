import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettreasurytransactionentries",
  "toolDescription": "List all TransactionEntries",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/treasury/transaction_entries",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "created": "created",
      "effective_at": "effective_at",
      "ending_before": "ending_before",
      "expand": "expand",
      "financial_account": "financial_account",
      "limit": "limit",
      "order_by": "order_by",
      "starting_after": "starting_after",
      "transaction": "transaction"
    }
  },
  inputParamsSchema
}

export default tool