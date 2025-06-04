import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_auth_send_email_confirmation",
  "toolDescription": "Send confirmation email",
  "baseUrl": "http://localhost:1338/api",
  "path": "/auth/send-email-confirmation",
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
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool