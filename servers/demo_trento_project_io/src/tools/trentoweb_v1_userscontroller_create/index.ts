import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_userscontroller_create",
  "toolDescription": "Create a new User",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/users",
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
      "abilities": "abilities",
      "email": "email",
      "enabled": "enabled",
      "fullname": "fullname",
      "password": "password",
      "password_confirmation": "password_confirmation",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool