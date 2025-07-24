import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportcompanypixelrollup",
  "toolDescription": "Export the company event rollups for each pixel",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/companies/{owner}/pixel-rollup",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool