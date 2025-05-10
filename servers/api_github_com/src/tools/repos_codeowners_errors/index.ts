import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_codeowners_errors",
  "toolDescription": "List CODEOWNERS errors",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codeowners/errors",
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