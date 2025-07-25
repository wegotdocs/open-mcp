import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettrackingpixeldomain",
  "toolDescription": "Get Tracking Pixel Domain",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/tracking-pixels/{owner}/{tracking_pixel_id}/domains/{domain_id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool