import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcharacterimagebyid",
  "toolDescription": "Get Character Image",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/characters/{character_id}/image",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "character_id": "character_id"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool