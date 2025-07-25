import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackagedomains",
  "toolDescription": "Get package domains",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/domains",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool