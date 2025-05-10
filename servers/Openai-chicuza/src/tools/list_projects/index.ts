import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_projects",
  "toolDescription": "Returns a list of projects.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects",
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
    "query": {
      "limit": "limit",
      "after": "after",
      "include_archived": "include_archived"
    }
  },
  inputParamsSchema
}

export default tool