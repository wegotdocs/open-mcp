import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_add_custom_labels_to_self_hosted_runner_for_repo",
  "toolDescription": "Add custom labels to a self-hosted runner for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "runner_id": "runner_id"
    },
    "body": {
      "labels": "labels"
    }
  },
  inputParamsSchema
}

export default tool