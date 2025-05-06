import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_delete_self_hosted_runner_from_repo",
  "toolDescription": "Delete a self-hosted runner from a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners/{runner_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "runner_id": "runner_id"
    }
  },
  inputParamsSchema
}

export default tool