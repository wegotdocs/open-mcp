import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classroom_get_assignment_grades",
  "toolDescription": "Get assignment grades",
  "baseUrl": "https://api.github.com",
  "path": "/assignments/{assignment_id}/grades",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "assignment_id": "assignment_id"
    }
  },
  inputParamsSchema
}

export default tool