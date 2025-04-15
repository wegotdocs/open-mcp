import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbillingportalconfigurations",
  "toolDescription": "List portal configurations",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/billing_portal/configurations",
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
      "active": "active",
      "ending_before": "ending_before",
      "expand": "expand",
      "is_default": "is_default",
      "limit": "limit",
      "starting_after": "starting_after"
    }
  },
  inputParamsSchema
}

export default tool