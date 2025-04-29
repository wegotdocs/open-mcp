import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelatedsubjectsbycharacterid",
  "toolDescription": "get character related subjects",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/characters/{character_id}/subjects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "character_id": "character_id"
    }
  },
  inputParamsSchema
}

export default tool