import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_add_collaborator",
  "toolDescription": "Add project collaborator",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}/collaborators/{username}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id",
      "username": "username"
    },
    "body": {
      "permission": "permission"
    }
  },
  inputParamsSchema
}

export default tool