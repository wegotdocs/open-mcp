import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_apps_with_access_to_protected_branch",
  "toolDescription": "Get apps with access to the protected branch",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "branch": "branch"
    }
  },
  inputParamsSchema
}

export default tool