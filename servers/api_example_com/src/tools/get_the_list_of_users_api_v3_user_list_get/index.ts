import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_users_api_v3_user_list_get",
  "toolDescription": "[manager:user=1] Get the list of users",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/user/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "org_id": "org_id",
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool