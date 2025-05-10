import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_an_user_api_v3_user_post",
  "toolDescription": "[manager:user=2] Add an user",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/user",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "role_id": "role_id",
      "org_id": "org_id",
      "email": "email",
      "prefer_lang": "prefer_lang",
      "authorization": "authorization",
      "accessible_org_id_list": "accessible_org_id_list"
    }
  },
  inputParamsSchema
}

export default tool