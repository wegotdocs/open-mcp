import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_player_license_information_api_v3_sys_player_lic_info_ge",
  "toolDescription": "[manager, dev=2] Get the player license information on the server",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/player_lic_info",
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