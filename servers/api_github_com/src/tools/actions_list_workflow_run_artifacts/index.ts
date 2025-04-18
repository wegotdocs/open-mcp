import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_workflow_run_artifacts",
  "toolDescription": "List workflow run artifacts",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool