import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_v1_user_username_delete",
  "toolDescription": "Delete",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/user/{username}",
  "method": "delete",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool