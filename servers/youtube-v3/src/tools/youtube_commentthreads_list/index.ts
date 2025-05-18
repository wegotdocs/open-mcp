import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_commentthreads_list",
  "toolDescription": "Retrieves a list of resources, possibly filtered.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/commentThreads",
  "method": "get",
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
      "part": "part",
      "allThreadsRelatedToChannelId": "allThreadsRelatedToChannelId",
      "channelId": "channelId",
      "id": "id",
      "maxResults": "maxResults",
      "moderationStatus": "moderationStatus",
      "order": "order",
      "pageToken": "pageToken",
      "searchTerms": "searchTerms",
      "textFormat": "textFormat",
      "videoId": "videoId"
    }
  },
  inputParamsSchema
}

export default tool