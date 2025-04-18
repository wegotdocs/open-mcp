import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_get_column",
  "toolDescription": "Get a project column",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/{column_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "column_id": "column_id"
    }
  },
  inputParamsSchema
}

export default tool