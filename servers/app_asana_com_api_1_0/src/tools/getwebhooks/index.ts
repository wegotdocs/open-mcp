import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebhooks",
  "toolDescription": "Get multiple webhooks",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/webhooks",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "workspace": "workspace",
      "resource": "resource",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool