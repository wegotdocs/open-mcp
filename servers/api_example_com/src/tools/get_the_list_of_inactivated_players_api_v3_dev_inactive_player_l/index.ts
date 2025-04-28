import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_inactivated_players_api_v3_dev_inactive_player_l",
  "toolDescription": "[user:dev=1] Get the list of inactivated players",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/inactive_player_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool