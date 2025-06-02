import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpostsv2",
  "toolDescription": "Get all posts from the groups the user is a member of (V2)",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v2/posts",
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
      "external_post_id": "external_post_id",
      "published_status": "published_status",
      "post_status": "post_status",
      "group_id": "group_id"
    }
  },
  inputParamsSchema
}

export default tool