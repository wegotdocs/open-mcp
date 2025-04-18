import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_list_packages_for_authenticated_user",
  "toolDescription": "List packages for the authenticated user's namespace",
  "baseUrl": "https://api.github.com",
  "path": "/user/packages",
  "method": "get",
  "security": [],
  "paramsMap": {
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