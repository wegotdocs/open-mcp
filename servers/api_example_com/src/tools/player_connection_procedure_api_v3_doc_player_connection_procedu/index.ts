import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "player_connection_procedure_api_v3_doc_player_connection_procedu",
  "toolDescription": "播放器連線流程",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/player_connection_procedure",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool