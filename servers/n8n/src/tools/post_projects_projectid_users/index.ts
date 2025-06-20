import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_projects_projectid_users",
  "toolDescription": "Add one or more users to a project",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/projects/{projectId}/users",
  "method": "post",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "projectId": "projectId"
    },
    "body": {
      "relations": "relations"
    }
  },
  inputParamsSchema
}

export default tool