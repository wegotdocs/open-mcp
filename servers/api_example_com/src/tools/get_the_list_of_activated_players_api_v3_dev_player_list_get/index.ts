import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_activated_players_api_v3_dev_player_list_get",
  "toolDescription": "[user:dev=1] Get the list of activated players",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/player_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "os_type_id": "os_type_id",
      "exclude_unknown_os": "exclude_unknown_os",
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool