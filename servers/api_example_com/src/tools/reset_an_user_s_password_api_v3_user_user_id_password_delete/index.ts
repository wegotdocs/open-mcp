import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reset_an_user_s_password_api_v3_user_user_id_password_delete",
  "toolDescription": "[manager:user=2] Reset an user's password",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/user/{user_id}/password",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "user_id": "user_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool