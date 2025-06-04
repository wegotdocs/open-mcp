import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "workedholidaydaysbyemployee",
  "toolDescription": "List Worked Absence Days By Employee",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/reports/worked-absence-days",
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
      "employeeIds[in]": "employeeIds[in]",
      "from": "from",
      "to": "to",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool