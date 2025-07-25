import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportcompanypackagerollup",
  "toolDescription": "Export the company event rollups for each package",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/companies/{owner}/package-rollup",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool