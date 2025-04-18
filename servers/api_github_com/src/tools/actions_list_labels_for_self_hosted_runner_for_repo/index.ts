import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_labels_for_self_hosted_runner_for_repo",
  "toolDescription": "List labels for a self-hosted runner for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
  "method": "get",
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