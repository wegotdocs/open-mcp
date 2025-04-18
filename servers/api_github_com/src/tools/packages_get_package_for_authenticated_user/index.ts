import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_get_package_for_authenticated_user",
  "toolDescription": "Get a package for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/packages/{package_type}/{package_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name"
    }
  },
  inputParamsSchema
}

export default tool