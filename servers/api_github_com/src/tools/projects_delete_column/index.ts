import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_delete_column",
  "toolDescription": "Delete a project column",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/{column_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "column_id": "column_id"
    }
  },
  inputParamsSchema
}

export default tool