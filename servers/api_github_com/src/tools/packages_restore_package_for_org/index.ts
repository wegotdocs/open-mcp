import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_restore_package_for_org",
  "toolDescription": "Restore a package for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/packages/{package_type}/{package_name}/restore",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "package_type": "package_type",
      "package_name": "package_name",
      "org": "org"
    },
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool