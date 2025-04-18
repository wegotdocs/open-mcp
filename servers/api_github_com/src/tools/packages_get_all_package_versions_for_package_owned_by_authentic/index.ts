import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_get_all_package_versions_for_package_owned_by_authentic",
  "toolDescription": "List package versions for a package owned by the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/packages/{package_type}/{package_name}/versions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name"
    },
    "query": {
      "page": "page",
      "per_page": "per_page",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool