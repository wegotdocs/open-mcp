import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getradarearlyfraudwarningsearlyfraudwarning",
  "toolDescription": "Retrieve an early fraud warning",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/radar/early_fraud_warnings/{early_fraud_warning}",
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
      "early_fraud_warning": "early_fraud_warning"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool