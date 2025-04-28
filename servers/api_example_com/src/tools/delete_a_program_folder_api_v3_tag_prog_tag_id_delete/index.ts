import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_program_folder_api_v3_tag_prog_tag_id_delete",
  "toolDescription": "[user:content=2] Delete a program folder",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/prog/{tag_id}",
  "method": "delete",
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