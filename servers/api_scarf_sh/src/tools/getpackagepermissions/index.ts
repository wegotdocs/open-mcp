import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackagepermissions",
  "toolDescription": "Get package permissions",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/permissions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool