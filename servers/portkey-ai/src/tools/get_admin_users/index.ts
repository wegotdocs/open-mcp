import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_users",
  "toolDescription": "Get users",
  "baseUrl": "https://api.portkey.ai",
  "path": "/admin/users",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "pageSize": "pageSize",
      "currentPage": "currentPage",
      "role": "role",
      "email": "email"
    },
    "header": {
      "x-portkey-api-key": "x-portkey-api-key"
    }
  },
  inputParamsSchema
}

export default tool