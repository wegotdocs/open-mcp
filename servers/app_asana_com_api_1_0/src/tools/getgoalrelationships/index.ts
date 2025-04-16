import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgoalrelationships",
  "toolDescription": "Get goal relationships",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/goal_relationships",
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
      "opt_pretty": "opt_pretty",
      "limit": "limit",
      "offset": "offset",
      "supported_goal": "supported_goal",
      "resource_subtype": "resource_subtype",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool