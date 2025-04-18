import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_readme",
  "toolDescription": "Get a repository README",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/readme",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool