import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_project_api_keys",
  "toolDescription": "Returns a list of API keys in the project.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/api_keys",
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
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool