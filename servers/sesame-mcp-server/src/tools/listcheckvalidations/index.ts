import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listcheckvalidations",
  "toolDescription": "List Check Validation By Employees and Status",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/check-validation",
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
      "status": "status",
      "from": "from",
      "to": "to",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool