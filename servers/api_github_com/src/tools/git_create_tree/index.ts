import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_create_tree",
  "toolDescription": "Create a tree",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/trees",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "tree": "tree",
      "base_tree": "base_tree"
    }
  },
  inputParamsSchema
}

export default tool