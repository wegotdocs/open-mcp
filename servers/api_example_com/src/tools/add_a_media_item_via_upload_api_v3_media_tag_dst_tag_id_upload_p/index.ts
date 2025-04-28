import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_media_item_via_upload_api_v3_media_tag_dst_tag_id_upload_p",
  "toolDescription": "[user:content=2] Add a media item via upload",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/tag/{dst_tag_id}/upload",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
      "conflict": "conflict",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool