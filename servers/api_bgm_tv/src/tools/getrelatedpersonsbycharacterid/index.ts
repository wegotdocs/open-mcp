import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelatedpersonsbycharacterid",
  "toolDescription": "get character related persons",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/characters/{character_id}/persons",
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