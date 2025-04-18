import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_self_hosted_runner_groups_for_org",
  "toolDescription": "List self-hosted runner groups for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "visible_to_repository": "visible_to_repository"
    }
  },
  inputParamsSchema
}

export default tool