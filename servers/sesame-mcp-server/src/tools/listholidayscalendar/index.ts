import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listholidayscalendar",
  "toolDescription": "List Holidays Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holiday-calendar",
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
      "limit": "limit",
      "page": "page",
      "name[contains]": "name[contains]"
    }
  },
  inputParamsSchema
}

export default tool