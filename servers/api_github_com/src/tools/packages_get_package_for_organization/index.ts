import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_get_package_for_organization",
  "toolDescription": "Get a package for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/packages/{package_type}/{package_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name",
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool