import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpublicholidays",
  "toolDescription": "List public holidays",
  "baseUrl": "https://api.float.com/v3",
  "path": "/public-holidays",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "year": "year",
      "region": "region",
      "start_date": "start_date",
      "end_date": "end_date",
      "page": "page",
      "per-page": "per-page"
    }
  },
  inputParamsSchema
}

export default tool