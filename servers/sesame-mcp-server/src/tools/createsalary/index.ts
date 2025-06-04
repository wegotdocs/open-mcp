import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsalary",
  "toolDescription": "Create Salary",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/salaries",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "employeeId": "employeeId",
      "payPeriod": "payPeriod",
      "currency": "currency",
      "grossSalary": "grossSalary",
      "payments": "payments",
      "contributionGroupId": "contributionGroupId",
      "startDate": "startDate",
      "endDate": "endDate",
      "comments": "comments",
      "prorated": "prorated"
    }
  },
  inputParamsSchema
}

export default tool