import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_auth_email_confirmation",
  "toolDescription": "Confirm user email",
  "baseUrl": "http://localhost:1338/api",
  "path": "/auth/email-confirmation",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "confirmation": "confirmation"
    }
  },
  inputParamsSchema
}

export default tool