import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_repo_access_to_self_hosted_runner_group_in_org",
  "toolDescription": "Set repository access for a self-hosted runner group in an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_group_id": "runner_group_id"
    },
    "body": {
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool