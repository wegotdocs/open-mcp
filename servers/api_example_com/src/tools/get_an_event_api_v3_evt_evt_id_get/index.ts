import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_an_event_api_v3_evt_evt_id_get",
  "toolDescription": "[user:content=1] Get an event",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/evt/{evt_id}",
  "method": "get",
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