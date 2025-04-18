import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_remove_collaborator",
  "toolDescription": "Remove user as a collaborator",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}/collaborators/{username}",
  "method": "delete",
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