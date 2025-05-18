import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_livestreams_update",
  "toolDescription": "Updates an existing stream for the authenticated user.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/liveStreams",
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
      "cdn": "cdn",
      "contentDetails": "contentDetails",
      "etag": "etag",
      "id": "id",
      "kind": "kind",
      "snippet": "snippet",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool