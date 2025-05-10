import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_schedule_api_v3_skd_skd_id_put",
  "toolDescription": "[user:content=2] Update a schedule",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/skd/{skd_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "skd_id": "skd_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "skditem_list": "skditem_list"
    }
  },
  inputParamsSchema
}

export default tool