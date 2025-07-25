import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportcompanyrollup",
  "toolDescription": "Export Company Data",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/company-rollup",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool