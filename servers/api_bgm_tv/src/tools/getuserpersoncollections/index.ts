import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserpersoncollections",
  "toolDescription": "获取用户人物收藏列表",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/collections/-/persons",
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