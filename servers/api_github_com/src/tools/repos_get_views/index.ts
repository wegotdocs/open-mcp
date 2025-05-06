import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_views",
  "toolDescription": "Get page views",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/traffic/views",
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