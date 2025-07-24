import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setpackagepermission",
  "toolDescription": "Set package permission (only when owner is a user)",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/permissions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "username": "username",
      "permission_level": "permission_level"
    }
  },
  inputParamsSchema
}

export default tool