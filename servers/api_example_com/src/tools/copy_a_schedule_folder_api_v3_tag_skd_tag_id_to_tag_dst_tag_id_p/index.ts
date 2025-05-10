import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copy_a_schedule_folder_api_v3_tag_skd_tag_id_to_tag_dst_tag_id_p",
  "toolDescription": "[user:content=2] Copy a schedule folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/skd/{tag_id}/to_tag/{dst_tag_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id",
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool