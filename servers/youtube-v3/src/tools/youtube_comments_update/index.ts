import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_comments_update",
  "toolDescription": "Updates an existing resource.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/comments",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "part": "part"
    },
    "body": {
      "etag": "etag",
      "id": "id",
      "kind": "kind",
      "snippet": "snippet"
    }
  },
  inputParamsSchema
}

export default tool