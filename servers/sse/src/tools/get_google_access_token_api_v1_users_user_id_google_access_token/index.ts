import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_google_access_token_api_v1_users_user_id_google_access_token",
  "toolDescription": "Get Google Access Token",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/users/{user_id}/google-access-token",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool