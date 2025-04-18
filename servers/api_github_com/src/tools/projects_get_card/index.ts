import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_get_card",
  "toolDescription": "Get a project card",
  "baseUrl": "https://api.github.com",
  "path": "/projects/columns/cards/{card_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "card_id": "card_id"
    }
  },
  inputParamsSchema
}

export default tool