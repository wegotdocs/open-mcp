import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_an_user_api_v3_user_user_id_get",
  "toolDescription": "[manager:user=1] Get an user",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/user/{user_id}",
  "method": "get",
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