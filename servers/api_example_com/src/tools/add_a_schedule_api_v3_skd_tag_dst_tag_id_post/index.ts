import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_schedule_api_v3_skd_tag_dst_tag_id_post",
  "toolDescription": "[user:content=2] Add a schedule",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/skd/tag/{dst_tag_id}",
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
      "os_type_id_list": "os_type_id_list",
      "skditem_list": "skditem_list"
    }
  },
  inputParamsSchema
}

export default tool