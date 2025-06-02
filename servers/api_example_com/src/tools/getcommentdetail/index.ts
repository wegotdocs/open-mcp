import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcommentdetail",
  "toolDescription": "Get a comment by IDs",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/comments/{comment_id}",
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
      "comment_id": "comment_id"
    }
  },
  inputParamsSchema
}

export default tool