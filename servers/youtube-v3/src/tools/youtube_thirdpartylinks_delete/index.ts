import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_thirdpartylinks_delete",
  "toolDescription": "Deletes a resource.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/thirdPartyLinks",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "linkingToken": "linkingToken",
      "type": "type",
      "externalChannelId": "externalChannelId",
      "part": "part"
    }
  },
  inputParamsSchema
}

export default tool