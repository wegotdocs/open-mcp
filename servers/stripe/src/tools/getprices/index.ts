import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprices",
  "toolDescription": "List all prices",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/prices",
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
      "created": "created",
      "currency": "currency",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "lookup_keys": "lookup_keys",
      "product": "product",
      "recurring": "recurring",
      "starting_after": "starting_after",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool