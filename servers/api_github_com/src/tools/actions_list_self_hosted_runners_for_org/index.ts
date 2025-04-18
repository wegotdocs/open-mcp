import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_self_hosted_runners_for_org",
  "toolDescription": "List self-hosted runners for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "name": "name",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool