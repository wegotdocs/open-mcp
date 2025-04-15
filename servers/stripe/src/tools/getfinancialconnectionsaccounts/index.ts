import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfinancialconnectionsaccounts",
  "toolDescription": "List Accounts",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/financial_connections/accounts",
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
      "account_holder": "account_holder",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "session": "session",
      "starting_after": "starting_after"
    }
  },
  inputParamsSchema
}

export default tool