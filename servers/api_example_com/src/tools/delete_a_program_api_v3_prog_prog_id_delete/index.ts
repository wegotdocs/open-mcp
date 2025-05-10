import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_program_api_v3_prog_prog_id_delete",
  "toolDescription": "[user:content=2] Delete a program",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/{prog_id}",
  "method": "delete",
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