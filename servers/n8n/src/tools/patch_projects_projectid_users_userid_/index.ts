import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_projects_projectid_users_userid_",
  "toolDescription": "Change a user's role in a project",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/projects/{projectId}/users/{userId}",
  "method": "patch",
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
    },
    "body": {
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool