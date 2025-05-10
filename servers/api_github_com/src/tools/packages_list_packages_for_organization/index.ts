import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_list_packages_for_organization",
  "toolDescription": "List packages for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/packages",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "package_type": "package_type",
      "visibility": "visibility",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool