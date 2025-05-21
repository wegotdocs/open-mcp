import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "chat_api_v1_aihub_chat_post",
  "toolDescription": "Chat",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/aihub/chat",
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
      "session_id": "session_id",
      "user_message": "user_message"
    }
  },
  inputParamsSchema
}

export default tool