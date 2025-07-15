import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpublicholiday",
  "toolDescription": "Retrieve a single public holiday",
  "baseUrl": "https://api.float.com/v3",
  "path": "/public-holidays/{public_holiday_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "public_holiday_id": "public_holiday_id"
    },
    "query": {
      "year": "year",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool