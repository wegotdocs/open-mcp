import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcomment",
  "toolDescription": "Create a new comment for a post.",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{post_id}/comments",
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
      "post_id": "post_id"
    },
    "body": {
      "attachments": "attachments",
      "author_id": "author_id",
      "body": "body",
      "external_id": "external_id",
      "language": "language",
      "mentioned_user_ids": "mentioned_user_ids",
      "published_at": "published_at",
      "quoted_comment_id": "quoted_comment_id"
    }
  },
  inputParamsSchema
}

export default tool