import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_user_retrieve",
  "toolDescription": "Reads and updates UserModel fields\nAccepts GET, PUT, PATCH methods.\n\nDefault accepted fields: username, first_name, last_name\nDefault display fields: pk, username, email, first_name, last_name\nRead-only fields: pk, email\n\nReturns UserModel",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/user/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool