import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_api_v1_user_username_get",
  "toolDescription": "Read",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/user/{username}",
  "method": "get",
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