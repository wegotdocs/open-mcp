import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_update_self_hosted_runner_group_for_org",
  "toolDescription": "Update a self-hosted runner group for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups/{runner_group_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_group_id": "runner_group_id"
    },
    "body": {
      "name": "name",
      "visibility": "visibility",
      "allows_public_repositories": "allows_public_repositories",
      "restricted_to_workflows": "restricted_to_workflows",
      "selected_workflows": "selected_workflows",
      "network_configuration_id": "network_configuration_id"
    }
  },
  inputParamsSchema
}

export default tool