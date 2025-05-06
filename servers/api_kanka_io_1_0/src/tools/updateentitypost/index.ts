import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateentitypost",
  "toolDescription": "Update a post",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/posts/{postId}",
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
    "body": {
      "name": "name",
      "entry": "entry",
      "visibility": "visibility",
      "position": "position",
      "is_private": "is_private"
    }
  },
  inputParamsSchema
}

export default tool