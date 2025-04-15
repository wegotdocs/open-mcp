import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsubscriptionschedules",
  "toolDescription": "List all schedules",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/subscription_schedules",
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
      "canceled_at": "canceled_at",
      "completed_at": "completed_at",
      "created": "created",
      "customer": "customer",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "released_at": "released_at",
      "scheduled": "scheduled",
      "starting_after": "starting_after"
    }
  },
  inputParamsSchema
}

export default tool