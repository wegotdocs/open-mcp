import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classroom_get_an_assignment",
  "toolDescription": "Get an assignment",
  "baseUrl": "https://api.github.com",
  "path": "/assignments/{assignment_id}",
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