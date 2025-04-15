import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbillingcreditbalancesummary",
  "toolDescription": "Retrieve the credit balance summary for a customer",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/billing/credit_balance_summary",
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
      "customer": "customer",
      "expand": "expand",
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool