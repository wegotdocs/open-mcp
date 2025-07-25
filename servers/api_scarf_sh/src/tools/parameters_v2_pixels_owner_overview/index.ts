import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_pixels_owner_overview",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/pixels/{owner}/overview",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool