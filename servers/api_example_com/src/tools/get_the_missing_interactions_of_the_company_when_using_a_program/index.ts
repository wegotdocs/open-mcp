import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_missing_interactions_of_the_company_when_using_a_program",
  "toolDescription": "[user:content=2] Get the missing interactions of the company when using a program",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/{prog_id}/missing_interactions",
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