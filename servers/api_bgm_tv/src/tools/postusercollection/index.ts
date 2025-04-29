import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postusercollection",
  "toolDescription": "新增或修改用户单个条目收藏",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/-/collections/{subject_id}",
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
      "subject_id": "subject_id"
    },
    "body": {
      "type": "type",
      "rate": "rate",
      "ep_status": "ep_status",
      "vol_status": "vol_status",
      "comment": "comment",
      "private": "private",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool