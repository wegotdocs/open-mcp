import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_update_employee_employment",
  "toolDescription": "Update Employee Employment",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/employments/{subResourceId}",
  "method": "patch",
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
    "body": {
      "id": "b_id",
      "unified_custom_fields": "unified_custom_fields",
      "job_title": "job_title",
      "pay_rate": "pay_rate",
      "pay_period": "pay_period",
      "pay_frequency": "pay_frequency",
      "pay_currency": "pay_currency",
      "employment_type": "employment_type",
      "employment_contract_type": "employment_contract_type",
      "work_time": "work_time",
      "passthrough": "passthrough"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool