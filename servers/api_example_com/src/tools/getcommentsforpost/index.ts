import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcommentsforpost",
  "toolDescription": "Get all comments for a post.",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{postId}/comments",
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
      "postId": "postId"
    },
    "query": {
      "after": "after",
      "before": "before",
      "limit": "limit",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool