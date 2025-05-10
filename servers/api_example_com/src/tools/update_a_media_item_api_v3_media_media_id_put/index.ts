import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_media_item_api_v3_media_media_id_put",
  "toolDescription": "[user:content=2] Update a media item",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/{media_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "media_id": "media_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "activation_time": "activation_time",
      "expiration_time": "expiration_time",
      "partner_media_id": "partner_media_id",
      "content": "content",
      "content_source": "content_source",
      "extra_content": "extra_content",
      "argument": "argument",
      "fore_color": "fore_color",
      "back_color": "back_color",
      "font_prop": "font_prop",
      "width": "width",
      "height": "height"
    }
  },
  inputParamsSchema
}

export default tool