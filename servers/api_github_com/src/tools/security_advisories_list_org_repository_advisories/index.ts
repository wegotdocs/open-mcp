import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_list_org_repository_advisories",
  "toolDescription": "List repository security advisories for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/security-advisories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "direction": "direction",
      "sort": "sort",
      "before": "before",
      "after": "after",
      "per_page": "per_page",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool