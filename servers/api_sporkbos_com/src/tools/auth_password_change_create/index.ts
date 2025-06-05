import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_password_change_create",
  "toolDescription": "Calls Django Auth SetPasswordForm save method.\n\nAccepts the following POST parameters: new_password1, new_password2\nReturns the success/fail message.",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/password/change/",
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
      "old_password": "old_password",
      "new_password1": "new_password1",
      "new_password2": "new_password2"
    }
  },
  inputParamsSchema
}

export default tool