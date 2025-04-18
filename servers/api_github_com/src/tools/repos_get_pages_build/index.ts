import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_pages_build",
  "toolDescription": "Get GitHub Pages build",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages/builds/{build_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "build_id": "build_id"
    }
  },
  inputParamsSchema
}

export default tool