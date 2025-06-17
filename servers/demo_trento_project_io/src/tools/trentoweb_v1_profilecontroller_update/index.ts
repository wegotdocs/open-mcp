import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_profilecontroller_update",
  "toolDescription": "Update the current user profile",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/profile",
  "method": "patch",
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
      "analytics_enabled": "analytics_enabled",
      "current_password": "current_password",
      "email": "email",
      "fullname": "fullname",
      "password": "password",
      "password_confirmation": "password_confirmation"
    }
  },
  inputParamsSchema
}

export default tool