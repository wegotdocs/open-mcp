import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsetupattempts",
  "toolDescription": "List all SetupAttempts",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/setup_attempts",
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
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "setup_intent": "setup_intent",
      "starting_after": "starting_after"
    }
  },
  inputParamsSchema
}

export default tool