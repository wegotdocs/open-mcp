import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_style_api_v3_style_style_id_get",
  "toolDescription": "[user:content=1] Get a style",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/style/{style_id}",
  "method": "get",
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