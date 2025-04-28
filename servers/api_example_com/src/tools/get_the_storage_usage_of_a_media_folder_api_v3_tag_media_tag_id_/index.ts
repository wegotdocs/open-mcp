import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_storage_usage_of_a_media_folder_api_v3_tag_media_tag_id_",
  "toolDescription": "[user:content=1] Get the storage usage of a media folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/media/{tag_id}/storage_usage",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool