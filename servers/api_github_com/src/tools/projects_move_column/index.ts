import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_move_column",
  "toolDescription": "Move a project column",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/{column_id}/moves",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "column_id": "column_id"
    },
    "body": {
      "position": "position"
    }
  },
  inputParamsSchema
}

export default tool