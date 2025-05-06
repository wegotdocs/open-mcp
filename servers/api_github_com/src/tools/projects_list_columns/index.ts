import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_list_columns",
  "toolDescription": "List project columns",
  "baseUrl": "https://api.github.com",
  "path": "/projects/{project_id}/columns",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool