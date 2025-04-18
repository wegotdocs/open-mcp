import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_create_card",
  "toolDescription": "Create a project card",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/{column_id}/cards",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "column_id": "column_id"
    }
  },
  inputParamsSchema
}

export default tool