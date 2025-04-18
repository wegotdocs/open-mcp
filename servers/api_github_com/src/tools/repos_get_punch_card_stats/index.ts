import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_punch_card_stats",
  "toolDescription": "Get the hourly commit count for each day",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/stats/punch_card",
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