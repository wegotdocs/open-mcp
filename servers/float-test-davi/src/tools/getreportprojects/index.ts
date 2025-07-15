import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getreportprojects",
  "toolDescription": "Retrieve report data for a list of projects",
  "baseUrl": "https://api.float.com/v3",
  "path": "/reports/projects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool