import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_readme_in_directory",
  "toolDescription": "Get a repository README for a directory",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/readme/{dir}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "dir": "dir"
    },
    "query": {
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool