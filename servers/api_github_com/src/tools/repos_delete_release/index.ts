import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_release",
  "toolDescription": "Delete a release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/{release_id}",
  "method": "delete",
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