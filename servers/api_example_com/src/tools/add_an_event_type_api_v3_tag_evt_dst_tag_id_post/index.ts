import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_an_event_type_api_v3_tag_evt_dst_tag_id_post",
  "toolDescription": "[user:content=2] Add an event type",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/evt/{dst_tag_id}",
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
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool