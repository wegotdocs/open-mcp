import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "collectcharacterbycharacteridanduserid",
  "toolDescription": "Collect character for current user",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/characters/{character_id}/collect",
  "method": "post",
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
    }
  },
  inputParamsSchema
}

export default tool