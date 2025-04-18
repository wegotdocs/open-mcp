import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_check_permissions_for_devcontainer",
  "toolDescription": "Check if permissions defined by a devcontainer have been accepted by the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codespaces/permissions_check",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "ref": "ref",
      "devcontainer_path": "devcontainer_path"
    }
  },
  inputParamsSchema
}

export default tool