import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getterminalreaders",
  "toolDescription": "List all Readers",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/terminal/readers",
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
      "device_type": "device_type",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "location": "location",
      "serial_number": "serial_number",
      "starting_after": "starting_after",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool