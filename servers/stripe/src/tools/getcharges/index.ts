import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcharges",
  "toolDescription": "List all charges",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/charges",
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
      "customer": "customer",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "payment_intent": "payment_intent",
      "starting_after": "starting_after",
      "transfer_group": "transfer_group"
    }
  },
  inputParamsSchema
}

export default tool