import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecomment",
  "toolDescription": "Update a comment",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{post_id}/comments/{comment_id}",
  "method": "put",
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
      "post_id": "post_id",
      "comment_id": "comment_id"
    },
    "body": {
      "attachments": "attachments",
      "body": "body",
      "external_id": "external_id",
      "language": "language",
      "mentioned_user_ids": "mentioned_user_ids"
    }
  },
  inputParamsSchema
}

export default tool