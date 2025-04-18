import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_add_repo_access_to_self_hosted_runner_group_in_org",
  "toolDescription": "Add repository access to a self-hosted runner group in an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_group_id": "runner_group_id",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool