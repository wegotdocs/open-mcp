import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgoals",
  "toolDescription": "Get goals",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/goals",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "portfolio": "portfolio",
      "project": "project",
      "task": "task",
      "is_workspace_level": "is_workspace_level",
      "team": "team",
      "workspace": "workspace",
      "time_periods": "time_periods",
      "limit": "limit",
      "offset": "offset",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool