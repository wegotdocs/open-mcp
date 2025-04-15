import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsubscriptions",
  "toolDescription": "List subscriptions",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/subscriptions",
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
      "automatic_tax": "automatic_tax",
      "collection_method": "collection_method",
      "created": "created",
      "current_period_end": "current_period_end",
      "current_period_start": "current_period_start",
      "customer": "customer",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "price": "price",
      "starting_after": "starting_after",
      "status": "status",
      "test_clock": "test_clock"
    }
  },
  inputParamsSchema
}

export default tool