import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusercharactercollection",
  "toolDescription": "获取用户单个角色收藏信息",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/collections/-/characters/{character_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username",
      "character_id": "character_id"
    }
  },
  inputParamsSchema
}

export default tool