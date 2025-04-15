import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettesthelperstestclockstestclock",
  "toolDescription": "Retrieve a test clock",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/test_helpers/test_clocks/{test_clock}",
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
    "path": {
      "test_clock": "test_clock"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool