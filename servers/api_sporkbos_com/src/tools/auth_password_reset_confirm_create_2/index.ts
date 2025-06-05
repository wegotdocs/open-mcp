import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_password_reset_confirm_create_2",
  "toolDescription": "Password reset e-mail link is confirmed, therefore\nthis resets the user's password.\n\nAccepts the following POST parameters: token, uid,\n    new_password1, new_password2\nReturns the success/fail message.",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/password/reset/confirm/{uidb64}/{token}/",
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
    "path": {
      "token": "token",
      "uidb64": "uidb64"
    },
    "body": {
      "new_password1": "new_password1",
      "new_password2": "new_password2",
      "uid": "uid",
      "token": "b_token",
      "accepted_policies": "accepted_policies",
      "required_reset_password": "required_reset_password"
    }
  },
  inputParamsSchema
}

export default tool