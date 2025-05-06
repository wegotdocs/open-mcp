import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_update_card",
  "toolDescription": "Update an existing project card",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/cards/{card_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "card_id": "card_id"
    },
    "body": {
      "note": "note",
      "archived": "archived"
    }
  },
  inputParamsSchema
}

export default tool