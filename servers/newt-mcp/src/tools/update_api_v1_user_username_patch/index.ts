import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_api_v1_user_username_patch",
  "toolDescription": "Update",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/user/{username}",
  "method": "patch",
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
    },
    "body": {
      "name": "name",
      "password": "password",
      "enabled": "enabled"
    }
  },
  inputParamsSchema
}

export default tool