import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_program_api_v3_prog_prog_id_put",
  "toolDescription": "[user:content=2] Update a program",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/{prog_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "prog_id": "prog_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
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