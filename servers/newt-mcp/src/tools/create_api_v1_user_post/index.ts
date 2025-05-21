import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_api_v1_user_post",
  "toolDescription": "Create",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/user",
  "method": "post",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "enabled": "enabled",
      "name": "name",
      "password": "password",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool