import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_style_api_v3_style_style_id_put",
  "toolDescription": "[user:content=2] Update a style",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/style/{style_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "style_id": "style_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "default": "default",
      "pressed": "pressed",
      "focused": "focused",
      "disabled": "disabled"
    }
  },
  inputParamsSchema
}

export default tool