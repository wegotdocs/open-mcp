import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_program_api_v3_prog_tag_dst_tag_id_post",
  "toolDescription": "[user:content=2] Add a program",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/tag/{dst_tag_id}",
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
      "prog_type_id": "prog_type_id",
      "os_type_id_list": "os_type_id_list",
      "back_color": "back_color",
      "back_media_id": "back_media_id",
      "width": "width",
      "height": "height",
      "duration": "duration",
      "monitor_list": "monitor_list",
      "block_list": "block_list",
      "progitem_list": "progitem_list",
      "interact_list": "interact_list"
    }
  },
  inputParamsSchema
}

export default tool