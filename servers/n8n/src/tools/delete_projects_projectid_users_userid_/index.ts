import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_projects_projectid_users_userid_",
  "toolDescription": "Delete a user from a project",
  "baseUrl": "/api/v1",
  "path": "/projects/{projectId}/users/{userId}",
  "method": "delete",
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
      "projectId": "projectId",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool