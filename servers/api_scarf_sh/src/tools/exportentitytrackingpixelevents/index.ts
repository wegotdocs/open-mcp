import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportentitytrackingpixelevents",
  "toolDescription": "Export all tracking pixel events",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/tracking-pixels/{owner}/events",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool