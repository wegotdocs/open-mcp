import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproject",
  "toolDescription": "Update a project's details, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/projects/{project_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool