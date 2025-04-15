import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcustomerscustomerbankaccountsid",
  "toolDescription": "Retrieve a bank account",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/customers/{customer}/bank_accounts/{id}",
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
      "customer": "customer",
      "id": "id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool