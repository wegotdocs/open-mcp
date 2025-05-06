import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_get_revision",
  "toolDescription": "Get a gist revision",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/{sha}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id",
      "sha": "sha"
    }
  },
  inputParamsSchema
}

export default tool