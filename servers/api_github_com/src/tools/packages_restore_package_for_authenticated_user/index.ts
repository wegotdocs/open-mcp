import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_restore_package_for_authenticated_user",
  "toolDescription": "Restore a package for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/packages/{package_type}/{package_name}/restore",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name"
    },
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool