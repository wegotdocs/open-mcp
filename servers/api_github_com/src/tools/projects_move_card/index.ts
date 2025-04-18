import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_move_card",
  "toolDescription": "Move a project card",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/cards/{card_id}/moves",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "card_id": "card_id"
    },
    "body": {
      "position": "position",
      "column_id": "column_id"
    }
  },
  inputParamsSchema
}

export default tool