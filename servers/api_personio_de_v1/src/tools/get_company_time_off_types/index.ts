import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_time_off_types",
  "toolDescription": "Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/time-off-types",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool