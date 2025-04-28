import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_an_event_type_api_v3_tag_evt_tag_id_delete",
  "toolDescription": "[user:content=2] Delete an event type",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/evt/{tag_id}",
  "method": "delete",
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