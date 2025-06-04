import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listemployeeofficeassignations",
  "toolDescription": "List employee office assignation",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-office-assignations",
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
      "officeId": "officeId",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool