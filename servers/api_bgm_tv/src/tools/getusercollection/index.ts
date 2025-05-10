import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusercollection",
  "toolDescription": "获取用户单个条目收藏",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/collections/{subject_id}",
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
      "username": "username",
      "subject_id": "subject_id"
    }
  },
  inputParamsSchema
}

export default tool