import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstatusesforobject",
  "toolDescription": "Get status updates from an object",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/status_updates",
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
      "parent": "parent",
      "created_since": "created_since",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool