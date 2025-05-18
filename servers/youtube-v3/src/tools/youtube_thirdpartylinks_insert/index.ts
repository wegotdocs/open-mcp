import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_thirdpartylinks_insert",
  "toolDescription": "Inserts a new resource into this collection.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/thirdPartyLinks",
  "method": "post",
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