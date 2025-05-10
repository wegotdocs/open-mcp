import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_media_item_api_v3_media_media_id_get",
  "toolDescription": "[user:content=1] Get a media item",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/{media_id}",
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