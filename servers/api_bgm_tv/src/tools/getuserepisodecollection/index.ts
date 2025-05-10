import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserepisodecollection",
  "toolDescription": "章节收藏信息",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/-/collections/-/episodes/{episode_id}",
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
      "episode_id": "episode_id"
    }
  },
  inputParamsSchema
}

export default tool