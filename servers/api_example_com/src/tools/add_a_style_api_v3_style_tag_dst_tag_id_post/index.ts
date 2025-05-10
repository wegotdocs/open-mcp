import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_style_api_v3_style_tag_dst_tag_id_post",
  "toolDescription": "[user:content=2] Add a style",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/style/tag/{dst_tag_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
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