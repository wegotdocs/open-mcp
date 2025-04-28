import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_media_folder_api_v3_tag_media_dst_tag_id_post",
  "toolDescription": "[user:content=2] Add a media folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/media/{dst_tag_id}",
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