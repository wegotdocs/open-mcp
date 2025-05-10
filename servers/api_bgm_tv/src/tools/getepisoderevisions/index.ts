import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getepisoderevisions",
  "toolDescription": "Get Episode Revisions",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/revisions/episodes",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "episode_id": "episode_id",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool