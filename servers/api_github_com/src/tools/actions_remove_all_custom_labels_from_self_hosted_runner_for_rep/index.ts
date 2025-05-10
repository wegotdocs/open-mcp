import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_remove_all_custom_labels_from_self_hosted_runner_for_rep",
  "toolDescription": "Remove all custom labels from a self-hosted runner for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
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