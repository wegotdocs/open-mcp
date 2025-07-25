import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackageroutes",
  "toolDescription": "Get package routes (only for File Packages)",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/routes",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "after": "after",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool