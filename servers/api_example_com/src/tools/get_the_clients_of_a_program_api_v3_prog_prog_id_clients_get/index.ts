import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_clients_of_a_program_api_v3_prog_prog_id_clients_get",
  "toolDescription": "[user:content=1] Get the clients of a program",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/{prog_id}/clients",
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