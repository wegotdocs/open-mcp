import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_an_user_api_v3_user_user_id_put",
  "toolDescription": "[manager:user=2] Updata an user",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/user/{user_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "user_id": "user_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "user_update_in": "user_update_in",
      "userauth_in": "userauth_in",
      "accessible_org_id_list": "accessible_org_id_list"
    }
  },
  inputParamsSchema
}

export default tool