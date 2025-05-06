import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_github_hosted_runners_in_group_for_org",
  "toolDescription": "List GitHub-hosted runners in a group for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_group_id": "runner_group_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool