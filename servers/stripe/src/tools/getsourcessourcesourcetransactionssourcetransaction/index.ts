import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsourcessourcesourcetransactionssourcetransaction",
  "toolDescription": "Retrieve a source transaction",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/sources/{source}/source_transactions/{source_transaction}",
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
      "source": "source",
      "source_transaction": "source_transaction"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool