import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_restore_package_version_for_org",
  "toolDescription": "Restore package version for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name",
      "org": "org",
      "package_version_id": "package_version_id"
    }
  },
  inputParamsSchema
}

export default tool