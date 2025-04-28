import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "move_a_schedule_api_v3_skd_skd_id_to_tag_dst_tag_id_put",
  "toolDescription": "[user:content=2] Move a schedule",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/skd/{skd_id}/to_tag/{dst_tag_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "skd_id": "skd_id",
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool