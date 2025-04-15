import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getterminalconfigurations",
  "toolDescription": "List all Configurations",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/terminal/configurations",
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
      "ending_before": "ending_before",
      "expand": "expand",
      "is_account_default": "is_account_default",
      "limit": "limit",
      "starting_after": "starting_after"
    }
  },
  inputParamsSchema
}

export default tool