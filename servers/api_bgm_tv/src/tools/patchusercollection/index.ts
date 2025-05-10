import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patchusercollection",
  "toolDescription": "修改用户单个收藏",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/-/collections/{subject_id}",
  "method": "patch",
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