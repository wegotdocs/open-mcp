import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_json_for_a_program_preview_api_v3_prog_prog_id_preview_j",
  "toolDescription": "[user:content=1] Get the JSON for a program preview",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/{prog_id}/preview.json",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "prog_id": "prog_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool