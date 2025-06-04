import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_users_id_",
  "toolDescription": "Update a user",
  "baseUrl": "http://localhost:1338/api",
  "path": "/users/{id}",
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
      "email": "email",
      "username": "username",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool