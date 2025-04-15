import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaccountsaccountexternalaccounts",
  "toolDescription": "List all external accounts",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/accounts/{account}/external_accounts",
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
    "path": {
      "account": "account"
    },
    "query": {
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "object": "object",
      "starting_after": "starting_after"
    }
  },
  inputParamsSchema
}

export default tool