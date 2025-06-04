import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "workedhoursbyemployee",
  "toolDescription": "List Worked Hours By Employee",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/reports/worked-hours",
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
      "withChecks": "withChecks",
      "from": "from",
      "to": "to",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool