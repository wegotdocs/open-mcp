import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listsalaries",
  "toolDescription": "List Salaries",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/salaries",
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
      "salaryId": "salaryId",
      "payPeriod": "payPeriod",
      "grossSalary": "grossSalary",
      "payments": "payments",
      "contributionGroup": "contributionGroup",
      "startDate": "startDate",
      "endDate": "endDate",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool