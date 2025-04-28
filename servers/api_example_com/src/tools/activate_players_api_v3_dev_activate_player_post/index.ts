import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_players_api_v3_dev_activate_player_post",
  "toolDescription": "[manager:dev=2] Activate or change the locations of multiple players.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/activate_player",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "org_id": "org_id",
      "dev_id_list": "dev_id_list"
    }
  },
  inputParamsSchema
}

export default tool