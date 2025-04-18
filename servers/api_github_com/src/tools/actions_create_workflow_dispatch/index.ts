import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_workflow_dispatch",
  "toolDescription": "Create a workflow dispatch event",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "workflow_id": "workflow_id"
    },
    "body": {
      "ref": "ref",
      "inputs": "inputs"
    }
  },
  inputParamsSchema
}

export default tool