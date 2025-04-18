import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_delete_for_release",
  "toolDescription": "Delete a release reaction",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "release_id": "release_id",
      "reaction_id": "reaction_id"
    }
  },
  inputParamsSchema
}

export default tool