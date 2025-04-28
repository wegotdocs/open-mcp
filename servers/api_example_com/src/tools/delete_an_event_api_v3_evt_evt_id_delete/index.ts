import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_an_event_api_v3_evt_evt_id_delete",
  "toolDescription": "[user:content=2] Delete an event",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/evt/{evt_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "evt_id": "evt_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool