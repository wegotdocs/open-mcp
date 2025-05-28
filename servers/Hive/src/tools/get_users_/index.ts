import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_",
  "toolDescription": "users list",
  "baseUrl": "http://localhost:8000",
  "path": "/users/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "query": {
      "is_designer": "is_designer"
    },
    "header": {
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool