import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojecttasks",
  "toolDescription": "List project tasks",
  "baseUrl": "https://api.float.com/v3",
  "path": "/project-tasks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "project_id": "project_id",
      "billable": "billable",
      "page": "page",
      "per-page": "per-page",
      "sort": "sort",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool