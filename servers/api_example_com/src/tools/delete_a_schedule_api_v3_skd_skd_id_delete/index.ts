import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_schedule_api_v3_skd_skd_id_delete",
  "toolDescription": "[user:content=2] Delete a schedule",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/skd/{skd_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "skd_id": "skd_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool