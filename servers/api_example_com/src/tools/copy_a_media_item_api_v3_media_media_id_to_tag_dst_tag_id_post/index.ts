import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copy_a_media_item_api_v3_media_media_id_to_tag_dst_tag_id_post",
  "toolDescription": "[user:content=2] Copy a media item",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/{media_id}/to_tag/{dst_tag_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "media_id": "media_id",
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool