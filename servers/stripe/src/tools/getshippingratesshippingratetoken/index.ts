import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getshippingratesshippingratetoken",
  "toolDescription": "Retrieve a shipping rate",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/shipping_rates/{shipping_rate_token}",
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
      "shipping_rate_token": "shipping_rate_token"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool