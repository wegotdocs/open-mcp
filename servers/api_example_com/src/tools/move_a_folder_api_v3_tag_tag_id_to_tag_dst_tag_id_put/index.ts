import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "move_a_folder_api_v3_tag_tag_id_to_tag_dst_tag_id_put",
  "toolDescription": "[user:content=2] Move a folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/{tag_id}/to_tag/{dst_tag_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id",
      "dst_tag_id": "dst_tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool