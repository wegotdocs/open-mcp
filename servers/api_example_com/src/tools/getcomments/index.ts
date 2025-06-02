import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcomments",
  "toolDescription": "Get all comment IDs",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/comments",
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
    "query": {
      "after": "after",
      "before": "before",
      "limit": "limit",
      "cursor": "cursor",
      "comment_status_filter": "comment_status_filter",
      "external_comment_id": "external_comment_id",
      "post_id": "post_id"
    }
  },
  inputParamsSchema
}

export default tool