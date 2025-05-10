import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classroom_list_classrooms",
  "toolDescription": "List classrooms",
  "baseUrl": "https://api.github.com",
  "path": "/classrooms",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool