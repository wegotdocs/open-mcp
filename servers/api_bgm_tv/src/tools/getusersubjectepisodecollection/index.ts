import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusersubjectepisodecollection",
  "toolDescription": "章节收藏信息",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/-/collections/{subject_id}/episodes",
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
      "subject_id": "subject_id"
    },
    "query": {
      "offset": "offset",
      "limit": "limit",
      "episode_type": "episode_type"
    }
  },
  inputParamsSchema
}

export default tool