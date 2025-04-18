import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_release_asset",
  "toolDescription": "Delete a release asset",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/assets/{asset_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "asset_id": "asset_id"
    }
  },
  inputParamsSchema
}

export default tool