import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_multiple_player_s_player_property_api_v3_dev_player_prope",
  "toolDescription": "[manager:dev=2] Update Multiple Player Property 更新多個播放器的播放器屬性。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/player_property",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "dev_id_list": "dev_id_list",
      "dev_player_property_in": "dev_player_property_in"
    }
  },
  inputParamsSchema
}

export default tool