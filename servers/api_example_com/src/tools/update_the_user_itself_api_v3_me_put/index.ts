import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_the_user_itself_api_v3_me_put",
  "toolDescription": "[user] Update the user itself",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/me",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "display_name": "display_name",
      "description": "description",
      "email": "email",
      "prefer_lang": "prefer_lang"
    }
  },
  inputParamsSchema
}

export default tool