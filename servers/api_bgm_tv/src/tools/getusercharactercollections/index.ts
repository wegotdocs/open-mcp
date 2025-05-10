import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusercharactercollections",
  "toolDescription": "获取用户角色收藏列表",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/collections/-/characters",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool