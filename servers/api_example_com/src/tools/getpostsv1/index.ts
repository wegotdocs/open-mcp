import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpostsv1",
  "toolDescription": "Get all posts from the groups the user is a member of (V1)",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts",
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
      "external_id": "external_id",
      "group_id": "group_id"
    }
  },
  inputParamsSchema
}

export default tool