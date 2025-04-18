import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_release",
  "toolDescription": "Get a release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/{release_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "release_id": "release_id"
    }
  },
  inputParamsSchema
}

export default tool