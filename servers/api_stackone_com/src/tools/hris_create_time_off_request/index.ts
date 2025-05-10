import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_create_time_off_request",
  "toolDescription": "Creates a time off request",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/time_off",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "employee_id": "employee_id",
      "approver_id": "approver_id",
      "status": "status",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_half_day": "start_half_day",
      "end_half_day": "end_half_day",
      "time_off_policy_id": "time_off_policy_id",
      "reason": "reason",
      "passthrough": "passthrough"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool