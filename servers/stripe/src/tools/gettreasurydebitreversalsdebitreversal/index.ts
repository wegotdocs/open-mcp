import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettreasurydebitreversalsdebitreversal",
  "toolDescription": "Retrieve a DebitReversal",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/treasury/debit_reversals/{debit_reversal}",
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
      "debit_reversal": "debit_reversal"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool