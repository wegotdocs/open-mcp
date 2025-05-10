import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_an_event_api_v3_evt_evt_id_put",
  "toolDescription": "[user:content=2] Update an event",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/evt/{evt_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "evt_id": "evt_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "condition_list": "condition_list"
    }
  },
  inputParamsSchema
}

export default tool