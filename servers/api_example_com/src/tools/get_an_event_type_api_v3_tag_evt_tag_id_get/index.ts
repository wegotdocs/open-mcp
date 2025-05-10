import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_an_event_type_api_v3_tag_evt_tag_id_get",
  "toolDescription": "[user:content=1] Get an event type",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/evt/{tag_id}",
  "method": "get",
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