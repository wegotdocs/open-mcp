import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_prog_folder_api_v3_tag_prog_tag_id_put",
  "toolDescription": "[user:content=2] Update a prog folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/prog/{tag_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id"
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