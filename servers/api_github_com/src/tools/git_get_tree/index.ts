import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_get_tree",
  "toolDescription": "Get a tree",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/trees/{tree_sha}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "tree_sha": "tree_sha"
    },
    "query": {
      "recursive": "recursive"
    }
  },
  inputParamsSchema
}

export default tool