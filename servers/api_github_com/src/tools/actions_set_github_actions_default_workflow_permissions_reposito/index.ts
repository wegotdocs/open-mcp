import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_github_actions_default_workflow_permissions_reposito",
  "toolDescription": "Set default workflow permissions for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/permissions/workflow",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "default_workflow_permissions": "default_workflow_permissions",
      "can_approve_pull_request_reviews": "can_approve_pull_request_reviews"
    }
  },
  inputParamsSchema
}

export default tool