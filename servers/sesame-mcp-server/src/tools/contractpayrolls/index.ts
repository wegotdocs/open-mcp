import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contractpayrolls",
  "toolDescription": "Get contract payrolls",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/contracts/contracts-for-payroll",
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
      "period": "period",
      "from": "from",
      "to": "to",
      "currency": "currency",
      "officeIds[in]": "officeIds[in]",
      "departmentIds[in]": "departmentIds[in]",
      "employeeStatus[in]": "employeeStatus[in]",
      "limit": "limit",
      "page": "page",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool