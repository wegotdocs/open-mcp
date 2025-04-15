import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecustomerscustomersubscriptionssubscriptionexposediddiscoun",
  "toolDescription": "Delete a customer discount",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount",
  "method": "delete",
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
      "subscription_exposed_id": "subscription_exposed_id"
    }
  },
  inputParamsSchema
}

export default tool