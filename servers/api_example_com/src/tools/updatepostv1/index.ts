import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepostv1",
  "toolDescription": "Update a post by id",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{post_id}",
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
      "post_id": "post_id"
    },
    "body": {
      "attachments": "attachments",
      "body": "body",
      "comments_enabled": "comments_enabled",
      "external_id": "external_id",
      "highlighted_until": "highlighted_until",
      "mentioned_user_ids": "mentioned_user_ids",
      "published_at": "published_at",
      "reactions_enabled": "reactions_enabled",
      "scheduled_at": "scheduled_at",
      "title": "title"
    }
  },
  inputParamsSchema
}

export default tool