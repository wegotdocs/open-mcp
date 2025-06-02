import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpostdetail",
  "toolDescription": "Get the post by id",
  "baseUrl": "https://api.example.com",
  "path": "/api/external/post/v1/posts/{postId}",
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
    }
  },
  inputParamsSchema
}

export default tool