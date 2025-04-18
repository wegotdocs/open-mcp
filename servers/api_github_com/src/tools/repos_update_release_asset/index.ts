import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_release_asset",
  "toolDescription": "Update a release asset",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/assets/{asset_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "asset_id": "asset_id"
    },
    "body": {
      "name": "name",
      "label": "label",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool