import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_get",
  "toolDescription": "Get a project",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool