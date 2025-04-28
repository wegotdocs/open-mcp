import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_style_folder_api_v3_tag_style_tag_id_get",
  "toolDescription": "[user:content=1] Get a style folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/style/{tag_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool