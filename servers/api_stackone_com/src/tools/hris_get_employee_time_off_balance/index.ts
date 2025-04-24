import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_get_employee_time_off_balance",
  "toolDescription": "Get Employee Time Off Balance",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/time_off_balances/{subResourceId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "subResourceId": "subResourceId"
    },
    "query": {
      "raw": "raw",
      "proxy": "proxy",
      "fields": "fields",
      "expand": "expand"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool