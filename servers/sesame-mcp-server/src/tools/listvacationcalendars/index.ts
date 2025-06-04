import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listvacationcalendars",
  "toolDescription": "List Vacation Calendars",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-calendars",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "employeeId": "employeeId",
      "year[in]": "year[in]",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool