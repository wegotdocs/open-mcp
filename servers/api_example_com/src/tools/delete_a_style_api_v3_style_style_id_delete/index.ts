import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_style_api_v3_style_style_id_delete",
  "toolDescription": "[user:content=2] Delete a style",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/style/{style_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "style_id": "style_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool