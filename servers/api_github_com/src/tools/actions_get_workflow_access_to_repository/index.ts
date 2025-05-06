import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_workflow_access_to_repository",
  "toolDescription": "Get the level of access for workflows outside of the repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/permissions/access",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool