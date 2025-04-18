import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classroom_get_a_classroom",
  "toolDescription": "Get a classroom",
  "baseUrl": "https://api.github.com",
  "path": "/classrooms/{classroom_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "classroom_id": "classroom_id"
    }
  },
  inputParamsSchema
}

export default tool