import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postfinancialconnectionsaccountsaccountunsubscribe",
  "toolDescription": "Unsubscribe from data refreshes for an Account",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/financial_connections/accounts/{account}/unsubscribe",
  "method": "post",
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
    }
  },
  inputParamsSchema
}

export default tool