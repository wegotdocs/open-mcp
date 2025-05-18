import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_youtube_v3_updatecommentthreads",
  "toolDescription": "Updates an existing resource.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/commentThreads",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "part": "part"
    },
    "body": {
      "etag": "etag",
      "id": "id",
      "kind": "kind",
      "replies": "replies",
      "snippet": "snippet"
    }
  },
  inputParamsSchema
}

export default tool