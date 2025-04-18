import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_create_column",
  "toolDescription": "Create a project column",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}/columns",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool