import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_remove_self_hosted_runner_from_group_for_org",
  "toolDescription": "Remove a self-hosted runner from a group for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_group_id": "runner_group_id",
      "runner_id": "runner_id"
    }
  },
  inputParamsSchema
}

export default tool