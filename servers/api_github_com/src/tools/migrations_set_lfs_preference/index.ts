import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_set_lfs_preference",
  "toolDescription": "Update Git LFS preference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/import/lfs",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "use_lfs": "use_lfs"
    }
  },
  inputParamsSchema
}

export default tool