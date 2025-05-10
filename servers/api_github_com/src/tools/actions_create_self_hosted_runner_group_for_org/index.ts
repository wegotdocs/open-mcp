import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_self_hosted_runner_group_for_org",
  "toolDescription": "Create a self-hosted runner group for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "visibility": "visibility",
      "selected_repository_ids": "selected_repository_ids",
      "runners": "runners",
      "allows_public_repositories": "allows_public_repositories",
      "restricted_to_workflows": "restricted_to_workflows",
      "selected_workflows": "selected_workflows",
      "network_configuration_id": "network_configuration_id"
    }
  },
  inputParamsSchema
}

export default tool