import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcommentreaction",
  "toolDescription": "Create a new reaction for a comment",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{postId}/comments/{commentId}/reactions",
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
      "postId": "postId",
      "commentId": "commentId"
    },
    "body": {
      "published_at": "published_at",
      "reacting_user_id": "reacting_user_id",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool