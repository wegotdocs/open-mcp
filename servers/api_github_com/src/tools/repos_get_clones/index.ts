import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_clones",
  "toolDescription": "Get repository clones",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/traffic/clones",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "per": "per"
    }
  },
  inputParamsSchema
}

export default tool