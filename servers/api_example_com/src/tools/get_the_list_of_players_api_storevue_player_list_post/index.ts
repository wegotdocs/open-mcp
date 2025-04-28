import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_players_api_storevue_player_list_post",
  "toolDescription": "Get players by player UUIDs",
  "baseUrl": "https://api.example.com",
  "path": "/api/storevue/player_list",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool