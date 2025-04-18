import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classroom_list_assignments_for_a_classroom",
  "toolDescription": "List assignments for a classroom",
  "baseUrl": "https://api.github.com",
  "path": "/classrooms/{classroom_id}/assignments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "classroom_id": "classroom_id"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool