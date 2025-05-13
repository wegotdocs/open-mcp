import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepassword",
  "toolDescription": "修改密码",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/currentUser/password",
  "method": "post",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "oldPassword": "oldPassword",
      "newPassword": "newPassword",
      "confirmNewPassword": "confirmNewPassword"
    }
  },
  inputParamsSchema
}

export default tool