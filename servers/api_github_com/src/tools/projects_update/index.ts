import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_update",
  "toolDescription": "Update a project",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "body": {
      "name": "name",
      "body": "body",
      "state": "state",
      "organization_permission": "organization_permission",
      "private": "private"
    }
  },
  inputParamsSchema
}

export default tool