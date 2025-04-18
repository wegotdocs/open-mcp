import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_get_restrictions_for_repo",
  "toolDescription": "Get interaction restrictions for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/interaction-limits",
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