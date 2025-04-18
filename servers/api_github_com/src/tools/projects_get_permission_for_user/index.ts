import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_get_permission_for_user",
  "toolDescription": "Get project permission for a user",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}/collaborators/{username}/permission",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool