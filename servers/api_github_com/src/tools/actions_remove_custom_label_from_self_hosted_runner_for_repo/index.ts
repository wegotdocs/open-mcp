import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_remove_custom_label_from_self_hosted_runner_for_repo",
  "toolDescription": "Remove a custom label from a self-hosted runner for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "runner_id": "runner_id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool