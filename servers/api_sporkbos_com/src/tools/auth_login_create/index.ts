import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_login_create",
  "toolDescription": "Check the credentials and return the REST Token\nif the credentials are valid and authenticated.\nCalls Django Auth login method to register User ID\nin Django session framework\n\nAccept the following POST parameters: username, password\nReturn",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/login/",
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
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool