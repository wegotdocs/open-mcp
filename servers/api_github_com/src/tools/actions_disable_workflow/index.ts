import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_disable_workflow",
  "toolDescription": "Disable a workflow",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "workflow_id": "workflow_id"
    }
  },
  inputParamsSchema
}

export default tool