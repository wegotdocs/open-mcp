import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_thirdpartylinks_update",
  "toolDescription": "Updates an existing resource.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/thirdPartyLinks",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "part": "part",
      "externalChannelId": "externalChannelId"
    },
    "body": {
      "etag": "etag",
      "kind": "kind",
      "linkingToken": "linkingToken",
      "snippet": "snippet",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool