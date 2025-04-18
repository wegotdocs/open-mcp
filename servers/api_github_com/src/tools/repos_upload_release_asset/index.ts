import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_upload_release_asset",
  "toolDescription": "Upload a release asset",
  "baseUrl": "https://uploads.github.com",
  "path": "/repos/{owner}/{repo}/releases/{release_id}/assets",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "release_id": "release_id"
    },
    "query": {
      "name": "name",
      "label": "label"
    }
  },
  inputParamsSchema
}

export default tool