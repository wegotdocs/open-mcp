import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_media_items_api_storevue_media_list_post",
  "toolDescription": "Get media items by media IDs",
  "baseUrl": "https://api.example.com",
  "path": "/api/storevue/media_list",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool