import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackagebyname",
  "toolDescription": "Get package (by name)",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_type}/{package_name}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool