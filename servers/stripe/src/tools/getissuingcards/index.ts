import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getissuingcards",
  "toolDescription": "List all cards",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/issuing/cards",
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
      "cardholder": "cardholder",
      "created": "created",
      "ending_before": "ending_before",
      "exp_month": "exp_month",
      "exp_year": "exp_year",
      "expand": "expand",
      "last4": "last4",
      "limit": "limit",
      "personalization_design": "personalization_design",
      "starting_after": "starting_after",
      "status": "status",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool