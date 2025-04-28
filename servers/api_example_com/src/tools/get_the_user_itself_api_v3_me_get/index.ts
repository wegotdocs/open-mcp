import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_user_itself_api_v3_me_get",
  "toolDescription": "[user] Get the user itself",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/me",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool