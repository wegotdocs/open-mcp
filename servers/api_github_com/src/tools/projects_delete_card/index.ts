import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_delete_card",
  "toolDescription": "Delete a project card",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/cards/{card_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "card_id": "card_id"
    }
  },
  inputParamsSchema
}

export default tool