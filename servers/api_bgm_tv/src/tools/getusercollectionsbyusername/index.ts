import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusercollectionsbyusername",
  "toolDescription": "获取用户收藏",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/collections",
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
      "username": "username"
    },
    "query": {
      "subject_type": "subject_type",
      "type": "type",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool