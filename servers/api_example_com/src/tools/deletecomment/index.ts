import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecomment",
  "toolDescription": "Delete an existing comment.",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{post_id}/comments/{comment_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool