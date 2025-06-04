import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listcompanyexpenses",
  "toolDescription": "List company expenses",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/expense-management/v1/expenses",
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
      "from": "from",
      "to": "to",
      "paymentMethodIds": "paymentMethodIds",
      "status": "status",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool