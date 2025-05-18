import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_comments_setmoderationstatus",
  "toolDescription": "Sets the moderation status of one or more comments.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/comments/setModerationStatus",
  "method": "post",
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
      "id": "id",
      "moderationStatus": "moderationStatus",
      "banAuthor": "banAuthor"
    }
  },
  inputParamsSchema
}

export default tool