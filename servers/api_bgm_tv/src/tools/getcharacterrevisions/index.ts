import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcharacterrevisions",
  "toolDescription": "Get Character Revisions",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/revisions/characters",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "character_id": "character_id",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool