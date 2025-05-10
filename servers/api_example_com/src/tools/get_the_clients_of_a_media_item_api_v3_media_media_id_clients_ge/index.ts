import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_clients_of_a_media_item_api_v3_media_media_id_clients_ge",
  "toolDescription": "[user:content=1] Get the clients of a media item",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/{media_id}/clients",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "media_id": "media_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool