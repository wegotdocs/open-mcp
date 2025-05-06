import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_update_column",
  "toolDescription": "Update an existing project column",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/{column_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "column_id": "column_id"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool