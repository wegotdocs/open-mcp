import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_create_employee_work_eligibility_request",
  "toolDescription": "Create Employee Work Eligibility Request",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/work_eligibility",
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
    "path": {
      "id": "id"
    },
    "body": {
      "document": "document",
      "issued_by": "issued_by",
      "number": "number",
      "sub_type": "sub_type",
      "type": "type",
      "valid_from": "valid_from",
      "valid_to": "valid_to",
      "passthrough": "passthrough"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool