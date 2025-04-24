import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_invite_employee",
  "toolDescription": "Invite Employee",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/invite",
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
      "passthrough": "passthrough"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool