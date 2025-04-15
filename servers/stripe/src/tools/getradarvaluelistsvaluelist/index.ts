import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getradarvaluelistsvaluelist",
  "toolDescription": "Retrieve a value list",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/radar/value_lists/{value_list}",
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
      "value_list": "value_list"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool