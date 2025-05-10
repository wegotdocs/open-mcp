import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hosted_compute_list_network_configurations_for_org",
  "toolDescription": "List hosted compute network configurations for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/network-configurations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool