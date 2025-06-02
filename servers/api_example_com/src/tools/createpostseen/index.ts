import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpostseen",
  "toolDescription": "Create a new seen for a post",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{postId}/post-seen",
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
      "postId": "postId"
    },
    "body": {
      "seen_at": "seen_at",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool