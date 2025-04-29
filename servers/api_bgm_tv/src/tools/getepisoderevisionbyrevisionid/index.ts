import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getepisoderevisionbyrevisionid",
  "toolDescription": "Get Episode Revision",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/revisions/episodes/{revision_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "revision_id": "revision_id"
    }
  },
  inputParamsSchema
}

export default tool