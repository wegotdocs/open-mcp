import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_content",
  "toolDescription": "Get repository content",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/contents/{path}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "path": "path"
    },
    "query": {
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool