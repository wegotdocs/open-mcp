import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_livebroadcasts_update",
  "toolDescription": "Updates an existing broadcast for the authenticated user.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/liveBroadcasts",
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
    }
  ],
  "paramsMap": {
    "query": {
      "part": "part",
      "onBehalfOfContentOwner": "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel": "onBehalfOfContentOwnerChannel"
    },
    "body": {
      "contentDetails": "contentDetails",
      "etag": "etag",
      "id": "id",
      "kind": "kind",
      "monetizationDetails": "monetizationDetails",
      "snippet": "snippet",
      "statistics": "statistics",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool