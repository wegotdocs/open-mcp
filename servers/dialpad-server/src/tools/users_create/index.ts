import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_create",
  "toolDescription": "User -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/users",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "auto_assign": "auto_assign",
      "email": "email",
      "first_name": "first_name",
      "last_name": "last_name",
      "license": "license",
      "office_id": "office_id"
    }
  },
  inputParamsSchema
}

export default tool