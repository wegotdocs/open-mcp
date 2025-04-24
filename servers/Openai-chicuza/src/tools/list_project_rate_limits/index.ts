import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_project_rate_limits",
  "toolDescription": "Returns the rate limits per model for a project.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/rate_limits",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "query": {
      "limit": "limit",
      "after": "after",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool