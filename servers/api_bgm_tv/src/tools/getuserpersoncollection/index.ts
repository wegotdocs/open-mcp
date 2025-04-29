import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserpersoncollection",
  "toolDescription": "获取用户单个人物收藏信息",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/collections/-/persons/{person_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username",
      "person_id": "person_id"
    }
  },
  inputParamsSchema
}

export default tool