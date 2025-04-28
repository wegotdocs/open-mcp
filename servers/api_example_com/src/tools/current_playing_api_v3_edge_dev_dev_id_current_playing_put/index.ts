import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "current_playing_api_v3_edge_dev_dev_id_current_playing_put",
  "toolDescription": "[access code] Update the currently playing information",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/dev/{dev_id}/current_playing",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "display_name": "display_name",
      "skd_status_id": "skd_status_id",
      "skd_id": "skd_id",
      "prog3_id": "prog3_id",
      "prog2_id": "prog2_id",
      "prog1_id": "prog1_id"
    },
    "header": {
      "access-code": "access-code"
    }
  },
  inputParamsSchema
}

export default tool