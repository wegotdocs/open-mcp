import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_restore_package_version_for_authenticated_user",
  "toolDescription": "Restore a package version for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name",
      "package_version_id": "package_version_id"
    }
  },
  inputParamsSchema
}

export default tool