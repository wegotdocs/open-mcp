import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "licenses_get_for_repo",
  "toolDescription": "Get the license for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/license",
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