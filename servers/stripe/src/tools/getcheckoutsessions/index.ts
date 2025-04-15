import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcheckoutsessions",
  "toolDescription": "List all Checkout Sessions",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/checkout/sessions",
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
      "customer_details": "customer_details",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "payment_intent": "payment_intent",
      "payment_link": "payment_link",
      "starting_after": "starting_after",
      "status": "status",
      "subscription": "subscription"
    }
  },
  inputParamsSchema
}

export default tool