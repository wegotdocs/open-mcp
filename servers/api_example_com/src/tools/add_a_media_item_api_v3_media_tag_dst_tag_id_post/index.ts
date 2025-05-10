import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_media_item_api_v3_media_tag_dst_tag_id_post",
  "toolDescription": "[user:content=2] Add a media item",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/tag/{dst_tag_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
      "is_temporary": "is_temporary",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "media_type_id": "media_type_id",
      "html_addon_id": "html_addon_id",
      "button_type_id": "button_type_id",
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
      "height": "height",
      "scale": "scale"
    }
  },
  inputParamsSchema
}

export default tool