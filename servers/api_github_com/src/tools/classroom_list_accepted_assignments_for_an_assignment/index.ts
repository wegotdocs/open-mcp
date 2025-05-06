import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classroom_list_accepted_assignments_for_an_assignment",
  "toolDescription": "List accepted assignments for an assignment",
  "baseUrl": "https://api.github.com",
  "path": "/assignments/{assignment_id}/accepted_assignments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "assignment_id": "assignment_id"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool