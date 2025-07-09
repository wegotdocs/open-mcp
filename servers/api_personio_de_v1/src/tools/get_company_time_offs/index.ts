import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_time_offs",
  "toolDescription": "This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/time-offs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "updated_from": "updated_from",
      "updated_to": "updated_to",
      "employees": "employees",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool