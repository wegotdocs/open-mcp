import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_set_restrictions_for_repo",
  "toolDescription": "Set interaction restrictions for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/interaction-limits",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "limit": "limit",
      "expiry": "expiry"
    }
  },
  inputParamsSchema
}

export default tool