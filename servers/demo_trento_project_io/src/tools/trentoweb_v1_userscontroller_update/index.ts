import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_userscontroller_update",
  "toolDescription": "Update an existing user",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/users/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "abilities": "abilities",
      "email": "email",
      "enabled": "enabled",
      "fullname": "fullname",
      "password": "password",
      "password_confirmation": "password_confirmation",
      "totp_disabled": "totp_disabled"
    },
    "header": {
      "if-match": "if-match"
    }
  },
  inputParamsSchema
}

export default tool