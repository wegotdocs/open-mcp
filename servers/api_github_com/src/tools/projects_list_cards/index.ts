import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_list_cards",
  "toolDescription": "List project cards",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/{column_id}/cards",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "column_id": "column_id"
    },
    "query": {
      "archived_state": "archived_state",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool