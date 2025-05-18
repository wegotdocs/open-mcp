import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_thirdpartylinks_list",
  "toolDescription": "Retrieves a list of resources, possibly filtered.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/thirdPartyLinks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "part": "part",
      "externalChannelId": "externalChannelId",
      "linkingToken": "linkingToken",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool