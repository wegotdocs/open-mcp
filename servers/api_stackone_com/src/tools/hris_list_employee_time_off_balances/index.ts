import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_list_employee_time_off_balances",
  "toolDescription": "List Employee Time Off Balances",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/time_off_balances",
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
      "id": "id"
    },
    "query": {
      "raw": "raw",
      "proxy": "proxy",
      "fields": "fields",
      "filter": "filter",
      "page": "page",
      "page_size": "page_size",
      "next": "next",
      "updated_after": "updated_after",
      "expand": "expand"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool