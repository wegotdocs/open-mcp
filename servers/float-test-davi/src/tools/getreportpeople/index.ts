import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getreportpeople",
  "toolDescription": "Retrieve report data for a list of people",
  "baseUrl": "https://api.float.com/v3",
  "path": "/reports/people",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "people_id": "people_id"
    }
  },
  inputParamsSchema
}

export default tool