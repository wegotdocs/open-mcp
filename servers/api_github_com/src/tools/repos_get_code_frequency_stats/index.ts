import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_code_frequency_stats",
  "toolDescription": "Get the weekly commit activity",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/stats/code_frequency",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool