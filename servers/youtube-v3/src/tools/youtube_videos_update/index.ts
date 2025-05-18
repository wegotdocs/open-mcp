import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_videos_update",
  "toolDescription": "Updates an existing resource.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/videos",
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
    },
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
    },
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
      "onBehalfOfContentOwner": "onBehalfOfContentOwner"
    },
    "body": {
      "ageGating": "ageGating",
      "contentDetails": "contentDetails",
      "etag": "etag",
      "fileDetails": "fileDetails",
      "id": "id",
      "kind": "kind",
      "liveStreamingDetails": "liveStreamingDetails",
      "localizations": "localizations",
      "monetizationDetails": "monetizationDetails",
      "player": "player",
      "processingDetails": "processingDetails",
      "recordingDetails": "recordingDetails",
      "snippet": "snippet",
      "statistics": "statistics",
      "status": "status",
      "suggestions": "suggestions",
      "topicDetails": "topicDetails"
    }
  },
  inputParamsSchema
}

export default tool