import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_release_by_tag",
  "toolDescription": "Get a release by tag name",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/tags/{tag}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "tag": "tag"
    }
  },
  inputParamsSchema
}

export default tool