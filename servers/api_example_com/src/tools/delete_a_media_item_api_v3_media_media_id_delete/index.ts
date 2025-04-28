import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_media_item_api_v3_media_media_id_delete",
  "toolDescription": "[user:content=2] Delete a media item",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/{media_id}",
  "method": "delete",
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