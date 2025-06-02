import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpostv1",
  "toolDescription": "Create a new post (V1)",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts",
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
    "body": {
      "attachments": "attachments",
      "body": "body",
      "comments_enabled": "comments_enabled",
      "external_id": "external_id",
      "group_id": "group_id",
      "highlighted_until": "highlighted_until",
      "mentioned_user_ids": "mentioned_user_ids",
      "published_at": "published_at",
      "reactions_enabled": "reactions_enabled",
      "scheduled_at": "scheduled_at",
      "send_push_notifications": "send_push_notifications",
      "title": "title"
    }
  },
  inputParamsSchema
}

export default tool